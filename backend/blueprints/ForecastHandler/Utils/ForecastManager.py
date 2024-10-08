import CSVForecastManager

def forecast_scv(method,df,target_col='Close',n_future=5):
        results = CSVForecastManager.forecast_scv(method,df,target_col,n_future)
        return results