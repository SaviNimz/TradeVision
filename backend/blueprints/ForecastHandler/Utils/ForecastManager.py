from .CSVForecastManager import forecast
def forecast_scv(method,df,target_col='Close',n_future=5):
        results = forecast(method,df,target_col,n_future)
        return results