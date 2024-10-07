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
import random

from .ResNLS.model_definition import ResNLS


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
        def add_random_noise(series, num_points=5, noise_scale=0.05):
            series_copy = series.copy()
            random_indices = random.sample(range(len(series)), num_points)
            for idx in random_indices:
                noise = series[idx] * random.uniform(-noise_scale, noise_scale)
                series_copy[idx] += noise
            return series_copy
        
        if method == 'ARIMA':
            series = data[target_col]
            series = add_random_noise(series)
            model_fit = self.train_arima(series)
            forecast = model_fit.forecast(steps=5)
            print(forecast)
            return forecast

        elif method == 'Prophet':
            series = data[target_col]
            series = add_random_noise(series)
            model_fit = self.train_prophet(series)
            forecast = model_fit.forecast(steps=5)
            print(forecast)
            return forecast

        elif method == 'ResNLS':
            series = data[target_col]
            series = add_random_noise(series)
            model_fit = self.train_resnls(series)
            forecast = model_fit.forecast(steps=5)
            print(forecast)
            return forecast
        
        return None