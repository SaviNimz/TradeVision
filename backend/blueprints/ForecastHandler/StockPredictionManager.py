import os
import json
from datetime import datetime, timedelta

class StockPredictionManager:
    def __init__(self, prediction_dir='predictions'):
        self.prediction_dir = prediction_dir
        if not os.path.exists(prediction_dir):
            os.makedirs(prediction_dir)

    def get_prediction_file(self, symbol):
        return os.path.join(self.prediction_dir, f"{symbol}.json")

    def is_outdated(self, last_prediction_date, max_age_days=1):
        """Check if the prediction is outdated based on the maximum age in days."""
        return datetime.now() > last_prediction_date + timedelta(days=max_age_days)

    def save_prediction(self, symbol, predictions, days_predicted):
        """Save prediction to JSON file."""
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

    def predict_stock(self, symbol, df, target_col, forecast_steps=5):
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
        model = ResNLS()  # Create an instance of the ResNLS model
        predictions = model.forecast_csv(df, target_col, forecast_steps)

        # Save the new predictions
        self.save_prediction(symbol, predictions.tolist(), forecast_steps)
        return predictions
