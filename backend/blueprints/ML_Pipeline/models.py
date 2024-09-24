import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from prophet import Prophet
import numpy as np
from sklearn.metrics import mean_squared_error
from .preprocesser import TimeSeriesPreprocessor

class Models:
    
    def __init__(self):
        self.preprocessor = TimeSeriesPreprocessor()
        
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
            model = self.train_lstm(series)
            # Prepare input for prediction
            last_n_lags = series[-5:].values.reshape(1, -1, 1)  # Last 5 values for prediction
            forecast = model.predict(last_n_lags)
            return self.preprocessor.inverse_transform(forecast)
        return None