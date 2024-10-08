

import pandas as pd
from Models import Models
from ..ForecastHandler import CSVForecastManager
df = pd.read_csv('F:\\TradeVision\\TradeVision\\backend\\blueprints\\ML_Pipeline\\Models\\AAPL.csv')


# models=Models()

# results = models.forcast_csv('ResNLS',df,'Close',5)

# print(results)


# model = ResNLS()
# results =model.forecast_csv(df)
# print(results)



# from ProphetModel.ProphetModel import ProphetModel

# model=ProphetModel()
# results = model.frocast_csv(df,'Close',5)

# print(results)





# from LSTMModel.LSTMModel import LSTMModel
# import numpy as np

# model=LSTMModel()
# results = model.forecast_csv(df)
# print(results)


# from ArimaModel.ArimaModel import ArimaModel
# model=ArimaModel()
# results=model.forcast_csv(df)
# print(results)



########### using models.py ##################


# model_Arima = Models.get_ArimaModel()
# results = model_Arima.forcast_csv(df) 
# print(results)


# results_res = Models.forecast_csv('ResNLS',df)
# print(results_res)

# results_ar = Models.forecast_csv('ARIMA',df)
# print(results_ar)

# results_ls = Models.forecast_csv('LSTM',df)
# print(results_ls)



# scaler_max=df['Close'].max()
# scaler_min=df['Close'].min()

# model=Models.get_ResNLS()
# results = model.forecast(df, model_weights_path=r'F:\TradeVision\TradeVision\backend\Models\AAPL_model.pth', 
#                          scaler_min=scaler_min, scaler_max=scaler_max)
# print(results)


# model=Models.get_ResNLS()
# results = model.forecast(df)
# print(results)

# model=Models.get_LSTMModel()
# results = model.forecast(df)
# print(results)


# print(Models.forecast('ARIMA',df))
# print(Models.forecast('LSTM',df))
# print(Models.forecast('Prophet',df))
# print(Models.forecast('ResNLS',df))

print(CSVForecastManager.forecast_scv('ARIMA',df))