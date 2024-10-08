from blueprints.ForecastHandler import CSVForecastManager
import pandas as pd

df = pd.read_csv('F:\\TradeVision\\TradeVision\\backend\\blueprints\\ML_Pipeline\\Models\\AAPL.csv')


print(CSVForecastManager.forecast_scv('ResNLS',df,n_future=3))