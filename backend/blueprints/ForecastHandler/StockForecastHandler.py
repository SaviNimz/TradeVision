from flask import blueprints
from flask import request, jsonify

from .Utils import ForecastManager
from ..ML_Pipeline.ModelWeights import ModelsWeightsManager

Stock_Forecast_handler = blueprints.Blueprint('stock_forecast_handler', __name__)


@Stock_Forecast_handler.route('/api/Stockpredict', methods=['POST'])
def predict():
    data = request.get_json()
    symbol = data['symbol']
    n_future = data['n_future']

    weight_path = ModelsWeightsManager.get_model_weight_path(symbol)

    results = ForecastManager.forecast_stock(symbol=symbol,model_weights_path=weight_path,forecast_steps=n_future)

    print(f'\n\n\n\n\n{results}\n\n\n\n')

    return jsonify({'predicted_prices': results})