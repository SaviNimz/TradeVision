import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from statsmodels.tsa.stattools import adfuller
import random

def check_stationarity(series, alpha=0.05):
    """Check if the time series is stationary."""
    result = adfuller(series)
    return result[1] < alpha  

def difference(series, interval=1):
    """Apply differencing to make the series stationary."""
    return series.diff(interval).dropna()

def log_transform(series):
    """Apply log transformation to stabilize variance."""
    return np.log(series)

def preprocess_arima(series):
    """Preprocess time series data for ARIMA."""
    if not check_stationarity(series):
        series = difference(series)
    return log_transform(series)

def preprocess_prophet(df, date_col='Date', value_col='Value'):
    """Preprocess time series data for Prophet."""
    df.loc[:, date_col] = pd.to_datetime(df[date_col], errors='coerce')
    
    # Check for invalid dates
    if df[date_col].isnull().any():
        print("Error: Invalid date values found.")
        return None
    
    # Rename columns for Prophet
    df = df[[date_col, value_col]].rename(columns={date_col: 'ds', value_col: 'y'})
    
    # Check for non-positive values in 'y'
    if any(df['y'] <= 0):
        print("Warning: Non-positive values found in 'y' column. Applying log transformation.")
        df['y'] = np.log(df['y'] + 1)  # Adding 1 to avoid log(0)

    return df

def preprocess_lstm(series, n_lags=5, scale=True):
    """Preprocess time series data for LSTM."""
    series = series.values.reshape(-1, 1)
    scaler = None
    
    if scale:
        scaler = MinMaxScaler(feature_range=(0, 1))
        series = scaler.fit_transform(series)
    
    X, y = [], []
    for i in range(n_lags, len(series)):
        X.append(series[i - n_lags:i, 0])
        y.append(series[i, 0])
    
    X = np.array(X)
    y = np.array(y)
    return X, y, scaler  # Return scaler for inverse transformation

def preprocess_xgboost(df, target_col='Target', test_size=0.2, lags=5):
    """Preprocess time series data for XGBoost."""
    df = df.copy()
    
    # Feature engineering: create lag features
    for i in range(1, lags + 1):
        df[f'lag_{i}'] = df[target_col].shift(i)
    
    df.dropna(inplace=True)
    X = df.drop(columns=[target_col])
    y = df[target_col]
    
    # Split the data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, shuffle=False)
    
    return X_train, X_test, y_train, y_test

def inverse_transform(series, scaler):
    """Inverse transform the series after scaling (for LSTM)."""
    if scaler:
        series = scaler.inverse_transform(series.reshape(-1, 1))
    return series

def reshape_data(train_data, test_data, days):
    """Reshape time series data for models like LSTM or CNN."""
    
    def split_data(dataset, train_day, predict_day):
        x = []
        y = []
        for i in range(train_day, len(dataset) - predict_day + 1):
            x.append(dataset[i - train_day: i, 0])
            y.append(dataset[i + predict_day - 1, 0])
        return np.array(x), np.array(y)

    # Prepare training and testing datasets using lagging
    x_train, y_train = split_data(train_data, days, 1)
    x_test, y_test = split_data(test_data, days, 1)

    # Reshape data for input into LSTM or CNN models
    x_train = np.reshape(x_train, (x_train.shape[0], 1, x_train.shape[1]))
    x_test = np.reshape(x_test, (x_test.shape[0], 1, x_test.shape[1]))

    return x_train, y_train, x_test, y_test

def add_random_noise(series, num_points=5, noise_scale=0.05):
    """Add random noise to a series."""
    series_copy = series.copy()
    random_indices = random.sample(range(len(series)), num_points)
    for idx in random_indices:
        noise = series[idx] * random.uniform(-noise_scale, noise_scale)
        series_copy[idx] += noise
    return series_copy

def train_test_split(X_data, y_data, train_size=0.95):
    """Split data into training and testing sets."""
    data_len = X_data.shape[0]
    train_size = int(data_len * train_size)
    X_train = X_data[:train_size]
    y_train = y_data[:train_size]
    X_test = X_data[train_size:]
    y_test = y_data[train_size:]
    return X_train, y_train, X_test, y_test
