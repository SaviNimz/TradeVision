import os
import json
from datetime import datetime, timedelta
from .StockDataFetcher import StockDataFetcher
from ...ML_Pipeline.Models import Models

class StockForecastManager:
    def __init__(self, prediction_dir='blueprints\\ForecastHandler\\ForecastResults'):
        self.prediction_dir = prediction_dir
        
        # Create the directory if it doesn't exist
        if not os.path.exists(self.prediction_dir):
            os.makedirs(self.prediction_dir)

    def get_prediction_file(self, symbol):
        """Construct the full path for the prediction file based on stock symbol."""
        return os.path.join(self.prediction_dir, f"{symbol}.json")

    def is_outdated(self, last_prediction_date, max_age_days=1):
        """Check if the prediction is outdated based on the maximum age in days."""
        return datetime.now() > last_prediction_date + timedelta(days=max_age_days)

    def save_prediction(self, symbol, predictions, days_predicted):
        """Save prediction to a JSON file."""
        prediction_file = self.get_prediction_file(symbol)
        data = {
            "symbol": symbol,
            "predictions": predictions,
            "days_predicted": days_predicted,
            "last_prediction": datetime.now().isoformat()  # Store the current time as ISO string
        }
        with open(prediction_file, 'w') as f:
            json.dump(data, f)
        print(f"Saved new predictions for {symbol}.")

    def load_prediction(self, symbol):
        """Load prediction from JSON file if it exists."""
        prediction_file = self.get_prediction_file(symbol)
        if os.path.exists(prediction_file):
            with open(prediction_file, 'r') as f:
                return json.load(f)
        return None

    def forecast(self, symbol,model_weights_path,target_col='Close',n_back=3,forecast_steps=5):
        """Main function to handle prediction workflow."""
        # Load existing prediction if available
        existing_prediction = self.load_prediction(symbol)
        if existing_prediction:
            last_prediction_date = datetime.fromisoformat(existing_prediction['last_prediction'])
            
            # Check if the prediction is outdated
            if not self.is_outdated(last_prediction_date):
                print(f"Using cached predictions for {symbol}.")
                return existing_prediction['predictions']
        
        # If no valid prediction exists, run the model to predict
        print(f"Running new prediction for {symbol}...")

        today = datetime.now()
        
        n_days_before = today - timedelta(days=10)  
    

        fetcher = StockDataFetcher(symbol)
        df = fetcher.fetch_daily_data(n_days_before.date(),today.date())

        scaler_min=df[target_col].min()
        scaler_max=df[target_col].max()

        # check how to use scaler current implement is not sure

        model = Models.get_ResNLS(n_input=n_back)
        predictions = model.forecast(df,target_col,forecast_steps,model_weights_path,scaler_min,scaler_max)

        # Save the new predictions
        self.save_prediction(symbol, predictions.tolist(), forecast_steps)
        return predictions.tolist()
