from flask import blueprints
from flask import request, jsonify
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf
import numpy as np
import pandas as pd
import torch
from datetime import datetime, timedelta

from blueprints.ML_Pipeline.ResNLS.model_definition import ResNLS


Stock_Forecast_handler = blueprints.Blueprint('stock_forecast_handler', __name__)

#loading the model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = ResNLS().to(device)
model.load_state_dict(torch.load('./Models/AAPL_model.pth'))  # Load your trained model weights
model.eval()

# Initialize scaler
scaler = MinMaxScaler(feature_range=(0, 1))

def get_last_sequence(symbol, n_input=5):
    # Fetch historical data for the last 10 days to ensure we have at least 5 valid trading days
    end_date = datetime.now()
    start_date = end_date - timedelta(days=10)  # Fetch data for the last 10 days
    
    # Download historical data
    df = yf.download(symbol, start=start_date.strftime("%Y-%m-%d"), end=end_date.strftime("%Y-%m-%d"), interval="1d")
    
    # Create dataset containing only close prices
    data = pd.DataFrame(pd.to_numeric(df["Close"]))
    print(data) 
    # Check if we have at least 5 data points
    if data.shape[0] < n_input:
        raise ValueError("Not enough data points available for the specified number of input days.")
    
    # Normalize the dataset
    scaled_data = scaler.fit_transform(data.values.reshape(-1, 1))

    # Get the last n_input days
    last_sequence = scaled_data[-n_input:, 0]
    return last_sequence

def forecast_future(model, last_sequence, n_future, n_input, scaler):
    # Forecast future stock prices for n_future days using the ResNLS model
    input_seq = last_sequence.copy()
    input_seq = np.reshape(input_seq, (1, 1, n_input))  # Reshape for model

    future_predictions = []

    for _ in range(n_future):
        input_tensor = torch.tensor(input_seq, dtype=torch.float).to(device)
        with torch.no_grad():
            next_pred = model(input_tensor).cpu().numpy()
        future_predictions.append(next_pred[0][0])
        input_seq = np.roll(input_seq, -1)
        input_seq[0, 0, -1] = next_pred

    future_predictions = scaler.inverse_transform(np.array(future_predictions).reshape(-1, 1))
    return future_predictions


@Stock_Forecast_handler.route('/api/Stockpredict', methods=['POST'])
def predict():
    data = request.get_json()
    symbol = data['symbol']
    n_future = data['n_future']

    # Get last sequence from yfinance
    last_sequence = get_last_sequence(symbol)

    # Make predictions
    future_predictions = forecast_future(model, last_sequence, n_future, 5, scaler)

    # Return the predictions as JSON
    return jsonify({'predicted_prices': future_predictions.flatten().tolist()})