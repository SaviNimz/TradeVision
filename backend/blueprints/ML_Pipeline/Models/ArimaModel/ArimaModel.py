from statsmodels.tsa.arima.model import ARIMA
from ..Model import Model
import pandas as pd

class ArimaModel(Model):
    def __init__(self, p=5, d=1, q=0):
        super().__init__()
        self.p = p
        self.d = d
        self.q = q

    def preprocess_data(self, df, target_col):
        """Preprocess data to return the target column for ARIMA model."""
        return df[target_col]

    def train(self, df, target_col):
        """Train ARIMA model with specified p, d, q values."""
        data = self.preprocess_data(df, target_col)
        model = ARIMA(data, order=(self.p, self.d, self.q)) 
        model_fit = model.fit()
        self.model = model_fit

        return model_fit

    def forecast(self, df, target_col='Close', forecast_steps=5, model_weights_path=None):
        """Generic forecast method for ARIMA model."""
        
        # Loading model weights is not applicable for ARIMA (like Prophet), but could load pre-trained model or parameters
        if model_weights_path:
            print(f"Loading model weights from {model_weights_path}...")
            # This is just a placeholder for any possible implementation of loading forecasts or parameters.
            pass

        # Train the model if it's not pre-trained or loaded
        if self.model is None:
            print("Training ARIMA model...")
            model = self.train(df, target_col)
        else:
            model = self.model

        # Forecast future steps
        print(f"Starting forecast for {forecast_steps} future steps...")
        forecast = model.forecast(steps=forecast_steps)

        # Return forecasted values as a list
        print("Forecasting completed successfully.")
        return forecast.tolist()


