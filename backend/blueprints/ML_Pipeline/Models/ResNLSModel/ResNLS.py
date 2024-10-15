import pandas as pd
import numpy as np
from ..Utils import preprocesser
import torch
import torch.nn as nn
import torch.optim as optim
import math
from sklearn.preprocessing import MinMaxScaler

from .model_definition import ResNLSModel
from ..Model import Model

class ResNLS(Model):
    
    def __init__(self,n_input=3, n_hidden=64):
        super().__init__()
        self.n_input=n_input
        self.n_hidden=n_hidden
        self.scaler=None
        self.train_split = 0.95
        self.epochs=50
        self.batch_size=64
        self.weights=None
    
    def preprocess_data(self,df,target_col):
        data=df[target_col]
        self.scaler = MinMaxScaler(feature_range=(0, 1))
        series = self.scaler.fit_transform(np.array(data).reshape(-1,1))

        X_data = np.array([[series[i-self.n_input:i, 0]] for i in range(self.n_input, len(series))])
        y_data = np.array(series[self.n_input:, -1]).reshape(-1, 1)

        X_train,y_train,X_test,y_test=preprocesser.train_test_split(X_data,y_data)

        return X_train,y_train,X_test,y_test
    

    def train(self, df,target_col):
        """Train ResNLS model with print statements."""
        print("Starting ResNLS training...")

        try:
            # Data preparation
            print("Preparing data for ResNLS...")
            x_train, y_train, x_test, y_test = self.preprocess_data(df,target_col)

            # Ensure tensors are on the correct device (CUDA or CPU)
            device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            val_input = torch.tensor(x_test, dtype=torch.float).to(device)
            val_target = torch.tensor(y_test, dtype=torch.float).to(device)

            # Initialize the model
            print("Initializing ResNLS model...")
            model = ResNLSModel().to(device)
            criterion = nn.MSELoss()
            optimizer = optim.Adam(model.parameters(), lr=1e-3)

            # Calculate number of batches
            batch_num = math.ceil(x_train.shape[0] / self.batch_size)

            # Training loop
            for epoch in range(self.epochs):
                model.train()
                epoch_train_loss = 0  # To track train loss for the entire epoch
                
                for j in range(batch_num):
                    # Prepare batch data
                    start_idx = j * self.batch_size
                    end_idx = min((j + 1) * self.batch_size, x_train.shape[0])
                    
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
                if (epoch + 1) % (self.epochs // 10) == 0:
                    avg_train_loss = epoch_train_loss / batch_num
                    print(f"Epoch {epoch + 1}/{self.epochs}, Train Loss: {avg_train_loss:.4f}, Val Loss: {val_loss.item():.4f}")

            print("ResNLS model training completed.")
            self.model=model
            
            return model

        except Exception as e:
            print(f"Error during ResNLS training: {e}")
            raise e

    def forecast(self, df, target_col='Close', forecast_steps=5, model_weights_path=None, scaler_min=None, scaler_max=None):
        # Initialize the device once, so it's available for both conditions
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        # Check if model weights are provided
        if model_weights_path:
            print(f"Loading model weights from {model_weights_path}...")

            # Initialize model and load the weights
            model = ResNLSModel().to(device)
            model.load_state_dict(torch.load(model_weights_path, map_location=torch.device('cpu')),strict=False )

            # Recreate the scaler with min and max values
            scaler = MinMaxScaler()
            scaler.data_min_ = np.array([scaler_min])
            scaler.data_max_ = np.array([scaler_max])
            scaler.scale_ = 1 / (scaler.data_max_ - scaler.data_min_)
            scaler.min_ = -scaler.data_min_ * scaler.scale_

            self.scaler = scaler

        else:
            print("No model weights provided, training the model...")
            # Train the model if no weights are provided
            model = self.train(df, target_col)

        print("Starting forecasting...")
        
        # Prepare the data for forecasting
        data = df[target_col]
        seq = self.scaler.transform(np.array(data[-self.n_input:]).reshape(-1, 1)).reshape(1, -1)

        try:
            input_seq = torch.tensor(seq, dtype=torch.float).to(device)

            model.eval()
            predictions = []
            
            with torch.no_grad():
                for _ in range(forecast_steps):
                    # Forward pass through the model
                    prediction = model(input_seq.unsqueeze(0))  # Add batch dimension
                    predictions.append(prediction.item())
                    
                    # Update input_seq with the prediction, simulating autoregressive forecasting
                    input_seq = torch.cat((input_seq[:, 1:], prediction), dim=1)

            # Reverse the scaling to get actual values
            predictions = np.array(predictions).reshape(-1, 1)
            predictions = self.scaler.inverse_transform(predictions)
            
            print("Forecasting completed successfully.")
            return predictions.flatten()

        except Exception as e:
            print(f"Error during ResNLS forecasting: {e}")
            raise e
