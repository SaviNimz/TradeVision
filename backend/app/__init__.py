from flask import Flask
from blueprints.UserHandler.UserHandler import User_handler
from blueprints.ForecastHandler.ForecastHandler import Forecast_handler

app = Flask(__name__)
app.register_blueprint(User_handler)
app.register_blueprint(Forecast_handler)

from app import views

