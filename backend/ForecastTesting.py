from blueprints.ForecastHandler.Utils import CSVForecastManager
import pandas as pd
from datetime import datetime,timedelta
from blueprints.ForecastHandler.Utils.StockDataFetcher import StockDataFetcher

from blueprints.ForecastHandler.Utils import ForecastManager
from blueprints.ForecastHandler.Utils.StockForecastManager import StockForecastManager
from Models import ModelsWeightsManager


df = pd.read_csv('F:\\TradeVision\\TradeVision\\backend\\blueprints\\ML_Pipeline\\Models\\AAPL.csv')


# print(CSVForecastManager.forecast_scv('ResNLS',df,n_future=3))



# model_weight_path='backend\\Models\\AAPL_model.pth'

# results= ForecastManager.forecast_stock(symbol='AAPL',model_weights_path=model_weight_path)
# print(results)


symbol='MSFT'
n_future =5

weight_path = ModelsWeightsManager.get_model_weight_path(symbol)


results = ForecastManager.forecast_stock(symbol=symbol,model_weights_path=weight_path,forecast_steps=n_future)

print(results)






# symbol='APPL'

# today = datetime.now()
        
# n_days_before = today - timedelta(days=10)  
    
# fetcher = StockDataFetcher(symbol)
# df = fetcher.fetch_daily_data(n_days_before.date(),today.date())

