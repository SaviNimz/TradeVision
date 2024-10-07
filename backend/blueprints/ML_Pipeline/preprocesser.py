import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from statsmodels.tsa.stattools import adfuller
from sklearn.model_selection import train_test_split
from scipy import stats

class TimeSeriesPreprocessor:
    
    def __init__(self):
        self.scaler = None
        
    def check_stationarity(self, series, alpha=0.05):
        """Check if the time series is stationary."""
        result = adfuller(series)
        if result[1] < alpha:
            return True  # Stationary
        return False  # Non-stationary

    def difference(self, series, interval=1):
        """Apply differencing to make the series stationary."""
        return series.diff(interval).dropna()
    
    def log_transform(self, series):
        """Apply log transformation to stabilize variance."""
        return np.log(series)
    
    def preprocess_arima(self, series):
        """Preprocess time series data for ARIMA."""
        if not self.check_stationarity(series):
            series = self.difference(series)
        return self.log_transform(series)

    def preprocess_prophet(self, df, date_col='Date', value_col='Value'):
        """Preprocess time series data for Prophet."""
        # Ensure date column is in datetime format using .loc
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

    def preprocess_lstm(self, series, n_lags=5, scale=True):
        """Preprocess time series data for LSTM."""
        series = series.values.reshape(-1, 1)
        
        if scale:
            self.scaler = MinMaxScaler(feature_range=(0, 1))
            series = self.scaler.fit_transform(series)
        
        X, y = [], []
        for i in range(n_lags, len(series)):
            X.append(series[i-n_lags:i, 0])
            y.append(series[i, 0])
        
        X = np.array(X)
        y = np.array(y)
        print(X)
        return X, y

    def preprocess_xgboost(self, df, target_col='Target', test_size=0.2, lags=5):
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

    def inverse_transform(self, series):
        """Inverse transform the series after scaling (for LSTM)."""
        if self.scaler:
            series = self.scaler.inverse_transform(series.reshape(-1, 1))
        return series
        
    def reshape_data(self, train_data, test_data, days):
        """Reshape time series data for models like LSTM or CNN."""
        
        def split_data(dataset, train_day, predict_day):
            x = []
            y = []
            for i in range(train_day, len(dataset) - predict_day + 1):
                x.append(dataset[i - train_day: i, 0])
                y.append(dataset[i + predict_day - 1, 0])
            return np.array(x), np.array(y)

        # Check types and shapes
        print("Type of train_data:", type(train_data))
        print("Shape of train_data:", train_data.shape if hasattr(train_data, 'shape') else None)
        print("Type of test_data:", type(test_data))
        print("Shape of test_data:", test_data.shape if hasattr(test_data, 'shape') else None)

        # Prepare training and testing datasets using lagging
        x_train, y_train = split_data(train_data, days, 1)
        x_test, y_test = split_data(test_data, days, 1)

        # Print shapes of split data
        print("Split Training Data - X shape:", x_train.shape)
        print("Split Training Data - Y shape:", y_train.shape)
        print("Split Testing Data - X shape:", x_test.shape)
        print("Split Testing Data - Y shape:", y_test.shape)

        # Reshape data for input into LSTM or CNN models
        x_train = np.reshape(x_train, (x_train.shape[0], 1, x_train.shape[1]))
        x_test = np.reshape(x_test, (x_test.shape[0], 1, x_test.shape[1]))

        return x_train, y_train, x_test, y_test

