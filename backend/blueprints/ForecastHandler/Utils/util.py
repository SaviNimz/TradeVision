import torch
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf
import pandas as pd

scaler = MinMaxScaler(feature_range=(0, 1))
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def get_last_sequence(symbol, n_input=5):
    # Fetch historical data
    df = yf.download(symbol, start="2024-08-01", end="2024-09-06", interval="1d")
    # Create dataset containing only close prices
    data = pd.DataFrame(pd.to_numeric(df["Close"]))
    dataset = np.reshape(data.values, (df.shape[0], 1))
    # Normalize the dataset
    scaled_data = scaler.fit_transform(dataset)
    # Get the last n_input days
    last_sequence = scaled_data[-n_input:, 0]
    return last_sequence


def forecast_future(model, last_sequence, n_future, n_input, scaler):
    """
    Forecast future stock prices for n_future days using the ResNLS model.

    Parameters:
    model: trained ResNLS model
    last_sequence: the last n_input days of stock price data (scaled)
    n_future: number of future days to forecast
    n_input: number of input days the model was trained on
    scaler: the scaler used to scale the data

    Returns:
    future_predictions: array of predicted stock prices (unscaled)
    """
    # Put the model in evaluation mode
    model.eval()

    # Prepare the input sequence (reshape for model)
    input_seq = last_sequence.copy()
    input_seq = np.reshape(input_seq, (1, 1, n_input))  # Reshape to (batch_size=1, channels=1, sequence_length=n_input)

    future_predictions = []

    for _ in range(n_future):
        # Convert the input sequence to a torch tensor
        input_tensor = torch.tensor(input_seq, dtype=torch.float).to(device)

        # Make a prediction for the next day
        with torch.no_grad():
            next_pred = model(input_tensor).cpu().numpy()

        # Append the predicted value to the list of future predictions
        future_predictions.append(next_pred[0][0])

        # Update the input sequence by removing the oldest value and appending the predicted value
        input_seq = np.roll(input_seq, -1)  # Shift the input sequence to the left
        input_seq[0, 0, -1] = next_pred  # Insert the new predicted value at the end

    # Inverse scale the predictions to get the actual price values
    future_predictions = scaler.inverse_transform(np.array(future_predictions).reshape(-1, 1))

    return future_predictions
