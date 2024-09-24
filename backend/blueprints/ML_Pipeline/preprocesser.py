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

# Example Usage:
# preprocessor = TimeSeriesPreprocessor()

# ARIMA preprocessing
# arima_series = preprocessor.preprocess_arima(time_series_data)

# Prophet preprocessing
# prophet_df = preprocessor.preprocess_prophet(time_series_df, date_col='Date', value_col='Close')

# LSTM preprocessing
# X_lstm, y_lstm = preprocessor.preprocess_lstm(time_series_data, n_lags=5)