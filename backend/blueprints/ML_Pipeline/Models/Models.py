from .ArimaModel.ArimaModel import ArimaModel
from .LSTMModel.LSTMModel import LSTMModel
from .ProphetModel.ProphetModel import ProphetModel
from .ResNLSModel.ResNLS import ResNLS

def get_ArimaModel(p=5, d=1, q=0):
    return ArimaModel(p=p, d=d, q=q)

def get_LSTMModel(n_input=3):
    return LSTMModel(n_input)

def get_ProphetModel():
    return ProphetModel()

def get_ResNLS(n_input=5, n_hidden=64):
    return ResNLS(n_input, n_hidden)


def forecast_csv(method, df, target_col='Close', forecast_steps=5):
    """Forecast values based on the selected method."""
    if method == 'ARIMA':
        model = get_ArimaModel()
    elif method == 'Prophet':
        model = get_ProphetModel()
    elif method == 'LSTM':
        model = get_LSTMModel()
    elif method == 'ResNLS':
        model = get_ResNLS()
    else:
        raise ValueError("Invalid method specified. Choose from 'ARIMA', 'Prophet', 'LSTM', or 'ResNLS'.")

    forecasted_results = model.forecast_csv(df, target_col, forecast_steps)
    return forecasted_results
