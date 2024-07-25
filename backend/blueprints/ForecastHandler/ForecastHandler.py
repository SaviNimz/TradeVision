from flask import blueprints

Forecast_handler = blueprints.Blueprint('forecast_handler', __name__)

@Forecast_handler.route('/api/forecast')
def forecast():
    return 'Forecast'

@Forecast_handler.route('/api/forecast/save')
def save():
    return 'Save'

