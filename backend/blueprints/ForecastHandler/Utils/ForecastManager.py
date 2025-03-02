from .CSVForecastManager import forecast

from .StockForecastManager import StockForecastManager

def forecast_csv(method,df,target_col='Close',n_future=5):
        results = forecast(method,df,target_col,n_future)
        return results

def forecast_stock(symbol,model_weights_path,target_col='Close',n_back=3,forecast_steps=5,prediction_dir='blueprints\\ForecastHandler\\ForecastResults'):
        stock_manager= StockForecastManager(prediction_dir)
        results = stock_manager.forecast(symbol,model_weights_path,target_col,n_back,forecast_steps)
        return results
