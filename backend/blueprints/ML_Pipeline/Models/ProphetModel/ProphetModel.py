from prophet import Prophet
from ..Model import Model
import pandas as pd
import numpy as np

class ProphetModel(Model):
    def __init__(self):
        super().__init__()
        self.forcasted_df = None

    def preprocess_data(self, df, target_col):
        if df['Date'].isnull().any():
            print("Error: Invalid date values found.")
            return None

        df['Date'] = pd.to_datetime(df['Date'])  # Convert to datetime
        df = df[['Date', target_col]]  # Select relevant columns
        df.columns = ['ds', 'y']

        if any(df['y'] <= 0):
            print("Warning: Non-positive values found in 'y' column. Applying log transformation.")
            df['y'] = np.log(df['y'] + 1)  # Adding 1 to avoid log(0)

        return df

    def train(self, df, target_col):
        """Train Prophet model."""
        data = self.preprocess_data(df, target_col)
        model = Prophet()
        try:
            model.fit(data)
        except Exception as e:
            print(f"Error fitting Prophet model: {e}")
            raise e
        
        self.model = model
        return model

    def forecast(self, df, target_col='Close', n_future=5, model_weights_path=None):
        """Generic forecast method for Prophet model."""
        
        if model_weights_path:
            print(f"Loading model weights from {model_weights_path}...")
            # However, Prophet models cannot load pre-trained weights, so you always need to train the model.
            pass

        # Train the model if it's not pre-trained or saved
        if self.model is None:
            print("Training Prophet model...")
            model = self.train(df, target_col)
        else:
            model = self.model

        # Future dataframe creation and forecasting
        print(f"Starting forecast for {n_future} future steps...")
        future = model.make_future_dataframe(periods=n_future)
        forecast = model.predict(future)

        self.forcasted_df = forecast

        # Return only the future predictions
        future_predictions = forecast[['ds', 'yhat']].tail(n_future)
        print("Forecasting completed successfully.")

        return future_predictions['yhat'].to_list()

    def forecast_stock(self, config):
        pass
