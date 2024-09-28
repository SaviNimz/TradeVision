import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from prophet import Prophet
import numpy as np
from sklearn.metrics import mean_squared_error
from .preprocesser import TimeSeriesPreprocessor
import torch
import torch.nn as nn
import torch.optim as optim
import math


class ResNLS(nn.Module):
    def __init__(self, n_input=5, n_hidden=64):
        super(ResNLS, self).__init__()
        self.n_input = n_input
        self.n_hidden = n_hidden

        # Initialize weights of the attention mechanism
        self.weight = nn.Parameter(torch.zeros(1))

        # Initialize CNN structure
        self.cnn = nn.Sequential(
            nn.Conv1d(in_channels=1, out_channels=self.n_hidden, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm1d(self.n_hidden, eps=1e-5),
            nn.Dropout(0.1),

            nn.Conv1d(in_channels=self.n_hidden, out_channels=self.n_hidden, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm1d(self.n_hidden, eps=1e-5),

            nn.Flatten(),
            nn.Linear(self.n_input * self.n_hidden, self.n_input)
        )

        # Initialize LSTM structure
        self.lstm = nn.LSTM(input_size=self.n_input, hidden_size=self.n_hidden, batch_first=True, bidirectional=False)
        self.linear = nn.Linear(self.n_hidden, 1)

    def forward(self, x):
        # x shape: (batch_size, 1, n_input)
        cnn_output = self.cnn(x)  # shape: (batch_size, n_input)
        cnn_output = cnn_output.view(-1, 1, self.n_input)  # shape: (batch_size, 1, n_input)

        # Residual connection
        residuals = x + self.weight * cnn_output  # shape: (batch_size, 1, n_input)

        # LSTM expects input shape: (batch_size, seq_length, input_size)
        lstm_out, (h_n, _) = self.lstm(residuals)  # h_n shape: (1, batch_size, n_hidden)

        # Pass the last hidden state through the linear layer
        y_hat = self.linear(h_n.squeeze(0))  # shape: (batch_size, 1)

        return y_hat


class Models:
    
    def __init__(self):
        self.preprocessor = TimeSeriesPreprocessor()
            
    def train_resnls(self, train_data, test_data, n_input=5, n_hidden=64, epochs=50, batch_size=64):
        """Train ResNLS model with print statements."""
        print("Starting ResNLS training...")

        try:
            # Data preparation
            print("Preparing data for ResNLS...")
            x_train, y_train, x_test, y_test = self.preprocessor.reshape_data(train_data, test_data, n_input)
            print(f"Data shape - X_train: {x_train.shape}, Y_train: {y_train.shape}, X_test: {x_test.shape}, Y_test: {y_test.shape}")

            # Ensure tensors are on the correct device (CUDA or CPU)
            device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            val_input = torch.tensor(x_test, dtype=torch.float).to(device)
            val_target = torch.tensor(y_test, dtype=torch.float).to(device)

            # Check shapes before passing to model
            print(f"Validation Input Shape: {val_input.shape}, Validation Target Shape: {val_target.shape}")

            # Initialize the model
            print("Initializing ResNLS model...")
            model = ResNLS(n_input=n_input, n_hidden=n_hidden).to(device)
            criterion = nn.MSELoss()
            optimizer = optim.Adam(model.parameters(), lr=1e-3)

            # Calculate number of batches
            batch_num = math.ceil(x_train.shape[0] / batch_size)
            print(f"Number of batches: {batch_num}")

            # Training loop
            for epoch in range(epochs):
                model.train()
                epoch_train_loss = 0  # To track train loss for the entire epoch
                
                for j in range(batch_num):
                    # Prepare batch data
                    start_idx = j * batch_size
                    end_idx = min((j + 1) * batch_size, x_train.shape[0])
                    
                    # Ensure proper slicing and check shapes
                    train_input = torch.tensor(x_train[start_idx:end_idx], dtype=torch.float).to(device)
                    train_target = torch.tensor(y_train[start_idx:end_idx], dtype=torch.float).to(device)

                    # Check shapes after slicing
                    print(f"Batch {j + 1}/{batch_num}, Input Shape: {train_input.shape}, Target Shape: {train_target.shape}")

                    # Zero gradients, forward pass, loss calculation, and backprop
                    optimizer.zero_grad()
                    train_output = model(train_input)

                    # Ensure model output and target shapes match for loss calculation
                    if train_output.shape != train_target.shape:
                        print(f"Shape mismatch! Output shape: {train_output.shape}, Target shape: {train_target.shape}")
                        raise ValueError("Output and target shapes do not match.")

                    train_loss = criterion(train_output, train_target)
                    train_loss.backward()

                    # Gradient clipping to avoid exploding gradients
                    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

                    optimizer.step()

                    epoch_train_loss += train_loss.item()

                # Validation step
                model.eval()
                with torch.no_grad():
                    val_output = model(val_input)
                    val_loss = criterion(val_output, val_target)

                # Print progress every 10% of epochs
                if (epoch + 1) % (epochs // 10) == 0:
                    avg_train_loss = epoch_train_loss / batch_num
                    print(f"Epoch {epoch + 1}/{epochs}, Train Loss: {avg_train_loss:.4f}, Val Loss: {val_loss.item():.4f}")

            print("ResNLS model training completed.")
            return model

        except Exception as e:
            print(f"Error during ResNLS training: {e}")
            raise e

    def forecast_resnls(self, model, test_data, scaler, forecast_steps=5):
        """Multi-step forecast with ResNLS model and print statements."""
        print("Starting ResNLS forecasting...")
        try:
            device = next(model.parameters()).device
            input_seq = torch.tensor(test_data[-forecast_steps:], dtype=torch.float).to(device)  # Last n_input data points

            model.eval()
            predictions = []
            with torch.no_grad():
                for _ in range(forecast_steps):
                    # Forward pass through the model
                    prediction = model(input_seq.unsqueeze(0))  # Add batch dimension
                    predictions.append(prediction.item())

                    # Update input_seq with the prediction, simulating autoregressive forecasting
                    input_seq = torch.cat((input_seq[1:], prediction.unsqueeze(0)))

            # Reverse the scaling to get actual values
            predictions = np.array(predictions).reshape(-1, 1)
            predictions = scaler.inverse_transform(predictions)
            print("Forecasting completed successfully.")
            return predictions.flatten()

        except Exception as e:
            print(f"Error during ResNLS forecasting: {e}")
            raise e
        
    def train_arima(self, series):
        """Train ARIMA model."""
        print(series)

        # This preprocessor does not seem to work properly 
        # will comment this for now and use the original series
        # processed_series = self.preprocessor.preprocess_arima(series)

        processed_series = series
        print(processed_series)
        model = ARIMA(processed_series, order=(5, 1, 0))  # Example order
        model_fit = model.fit()
        return model_fit
    
    def train_prophet(self, df, date_col='Date', value_col='Value'):
        """Train Prophet model."""
        # Convert date column to datetime using .loc to avoid the SettingWithCopyWarning
        df.loc[:, date_col] = pd.to_datetime(df[date_col])

        # Preprocess the dataframe for Prophet
        processed_df = self.preprocessor.preprocess_prophet(df, date_col, value_col)

        # Log the processed data for debugging
        print(f"Processed Data for Prophet:\n{processed_df.head()}")

        # Fit the model
        model = Prophet()
        try:
            model.fit(processed_df)
        except Exception as e:
            print(f"Error fitting Prophet model: {e}")
            raise e

        return model
    
    def train_lstm(self, series, n_lags=5):
        """Train LSTM model."""
        X, y = self.preprocessor.preprocess_lstm(series, n_lags)
        # Reshape input for LSTM (samples, time steps, features)
        X = X.reshape((X.shape[0], X.shape[1], 1))
        
        # Define and compile your LSTM model here
        # Example: using Keras
        from keras.models import Sequential
        from keras.layers import LSTM, Dense, Dropout

        model = Sequential()
        model.add(LSTM(50, activation='relu', input_shape=(n_lags, 1)))
        model.add(Dropout(0.2))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mean_squared_error')
        
        model.fit(X, y, epochs=50, batch_size=32, verbose=0)
        return model

    def forecast(self, method, data, target_col):
        """Forecast using the selected method."""
        if method == 'ARIMA':
            series = data[target_col]  # Use the target column provided
            model_fit = self.train_arima(series)
            forecast = model_fit.forecast(steps=5)  # Forecast next 5 steps
            print(forecast)
            return forecast

        elif method == 'Prophet':
            df = data[['Date', target_col]]
            print(f"Data passed to Prophet:\n{df.head()}")
            model = self.train_prophet(df)
            future = model.make_future_dataframe(periods=5)
            print(f"Future dataframe:\n{future.tail()}")
            forecast = model.predict(future)
            print(f"Forecast result:\n{forecast.tail()}")
            return forecast['yhat'][-5:]

        elif method == 'LSTM':
            series = data[target_col]  # Use the target column provided
            print(series)
            model = self.train_lstm(series)
            # Prepare input for prediction
            last_n_lags = series[-5:].values.reshape(1, -1, 1)  # Last 5 values for prediction
            forecast = model.predict(last_n_lags)
            return self.preprocessor.inverse_transform(forecast)
        
        elif method == 'ResNLS':

            train_data = data[:math.ceil(len(data) * 0.9)]  # Train on 90% of data
            test_data = data[len(train_data) - 5:]  # Test on the remaining data
            model = self.train_resnls(train_data, test_data)
            predictions = self.forecast_resnls(model, test_data, self.preprocessor.scaler)
            return predictions
        
        return None