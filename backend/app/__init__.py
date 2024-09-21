from flask import Flask
from blueprints.UserHandler.UserHandler import User_handler
from blueprints.ForecastHandler.CSVForecastHandler import CSV_Forecast_handler

from blueprints.ForecastHandler.StockForecastHandler import Stock_Forecast_handler
from blueprints.FeedbackHandler.FeedbackHandler import Feedback_handler

from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.register_blueprint(User_handler)
app.register_blueprint(CSV_Forecast_handler)
app.register_blueprint(Stock_Forecast_handler)
app.register_blueprint(Feedback_handler)


bcrypt = Bcrypt(app)

CORS(app, resources={r"/api/*": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": "*"}})

bcrypt = Bcrypt(app)

CORS(app, resources={r"/api/*": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": "*"}})

from app import views



