from blueprints.ForecastHandler.Utils import CSVForecastManager
import pandas as pd
from datetime import datetime,timedelta
from blueprints.ForecastHandler.Utils.StockDataFetcher import StockDataFetcher

from blueprints.ForecastHandler.Utils.StockForecastManager import StockForecastManager

df = pd.read_csv('F:\\TradeVision\\TradeVision\\backend\\blueprints\\ML_Pipeline\\Models\\AAPL.csv')


# print(CSVForecastManager.forecast_scv('ResNLS',df,n_future=3))



model_weight_path='F:\\TradeVision\\TradeVision\\backend\\Models\\AAPL_model.pth'

stockManager = StockForecastManager()
results= stockManager.forecast(symbol='AAPL',model_weights_path=model_weight_path)
print(results)





# symbol='APPL'

# today = datetime.now()
        
# n_days_before = today - timedelta(days=10)  
    
# fetcher = StockDataFetcher(symbol)
# df = fetcher.fetch_daily_data(n_days_before.date(),today.date())

