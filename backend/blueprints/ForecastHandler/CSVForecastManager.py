from ..ML_Pipeline.Models import Models


def forecast_scv(method,df,target_col='Close',n_future=5):
        results = Models.forecast(method,df,target_col,n_future)
        return results
    
