import pytest
import json
from flask import Flask
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from blueprints.ForecastHandler.CSVForecastHandler import CSV_Forecast_handler 
import io

app = Flask(__name__)
app.register_blueprint(CSV_Forecast_handler)

bcrypt = Bcrypt()
client = MongoClient('mongodb+srv://Savinu:SaviYa1000!!@tradevision.6jkzn.mongodb.net/')
db = client['tradevision']
users_collection = db['users']

# Create a test client for the app
@pytest.fixture
def test_client():
    with app.test_client() as client:
        yield client

@pytest.fixture(autouse=True)
def clear_db():
    # Clear the users collection before each test
    users_collection.delete_many({})

# Test for file upload
def test_handle_upload(test_client):
    # Create a valid CSV file in memory
    valid_csv = "date,open,high,low,close,volume\n2023-01-01,100,110,90,105,1000\n2023-01-02,105,115,95,110,1500"
    response = test_client.post('/api/CSVupload', data={'file': (io.BytesIO(valid_csv.encode()), 'test.csv')})

    assert response.status_code == 200
    json_data = json.loads(response.data)
    assert json_data['success'] == 'File uploaded and processed successfully'
    assert len(json_data['data']) == 2  # There are 2 rows in the CSV

def test_handle_upload_invalid_csv_01(test_client):
    # Create an invalid CSV (missing columns)
    invalid_csv = "date,open,high\n2023-01-01,100,110"
    response = test_client.post('/api/CSVupload', data={'file': (io.BytesIO(invalid_csv.encode()), 'invalid_test.csv')})

    assert response.status_code == 400
    json_data = json.loads(response.data)
    assert json_data['error'] == 'Invalid CSV structure Your CSV file should contain date, open, high, low, close, volume Columns.'

def test_handle_upload_invalid_csv_02(test_client):
    # Create an invalid CSV (missing columns)
    invalid_csv = "date,open,high\n2023-01-01,100,110,100"
    response = test_client.post('/api/CSVupload', data={'file': (io.BytesIO(invalid_csv.encode()), 'invalid_test.csv')})

    assert response.status_code == 400
    json_data = json.loads(response.data)
    assert json_data['error'] == 'Invalid CSV structure Your CSV file should contain date, open, high, low, close, volume Columns.'

def test_forecast_close(test_client):
    # Create a valid CSV file
    valid_csv = "date,open,high,low,close,volume\n2023-01-01,100,110,90,105,1000\n2023-01-02,105,115,95,110,1500"
    test_client.post('/api/CSVupload', data={'file': (io.BytesIO(valid_csv.encode()), 'test.csv')})

    # Prepare data for forecasting
    csv_data = [
        {'date': '2023-01-01', 'open': 100, 'high': 110, 'low': 90, 'close': 105, 'volume': 1000},
        {'date': '2023-01-02', 'open': 105, 'high': 115, 'low': 95, 'close': 110, 'volume': 1500}
    ]

    methods = ['ResNLS','ARIMA','Prophet']  

    response = test_client.post('/api/forecast', json={
        'column': 'close',
        'methods': methods,
        'csvData': csv_data
    })

    assert response.status_code == 200
    json_data = json.loads(response.data)
    for method in methods:
        assert method in json_data  # Ensure each method is in the results
        assert isinstance(json_data[method], dict)  # Check that the result is a dictionary


def test_forecast_open(test_client):
    # Create a valid CSV file
    valid_csv = "date,open,high,low,close,volume\n2023-01-01,100,110,90,105,1000\n2023-01-02,105,115,95,110,1500"
    test_client.post('/api/CSVupload', data={'file': (io.BytesIO(valid_csv.encode()), 'test.csv')})

    # Prepare data for forecasting
    csv_data = [
        {'date': '2023-01-01', 'open': 100, 'high': 110, 'low': 90, 'close': 105, 'volume': 1000},
        {'date': '2023-01-02', 'open': 105, 'high': 115, 'low': 95, 'close': 110, 'volume': 1500}
    ]

    methods = ['ResNLS','ARIMA','Prophet']  

    response = test_client.post('/api/forecast', json={
        'column': 'open',
        'methods': methods,
        'csvData': csv_data
    })

    assert response.status_code == 200
    json_data = json.loads(response.data)
    for method in methods:
        assert method in json_data  # Ensure each method is in the results
        assert isinstance(json_data[method], dict)  # Check that the result is a dictionary


def test_forecast_high(test_client):
    # Create a valid CSV file
    valid_csv = "date,open,high,low,close,volume\n2023-01-01,100,110,90,105,1000\n2023-01-02,105,115,95,110,1500"
    test_client.post('/api/CSVupload', data={'file': (io.BytesIO(valid_csv.encode()), 'test.csv')})

    # Prepare data for forecasting
    csv_data = [
        {'date': '2023-01-01', 'open': 100, 'high': 110, 'low': 90, 'close': 105, 'volume': 1000},
        {'date': '2023-01-02', 'open': 105, 'high': 115, 'low': 95, 'close': 110, 'volume': 1500}
    ]

    methods = ['ResNLS','ARIMA','Prophet']  

    response = test_client.post('/api/forecast', json={
        'column': 'high',
        'methods': methods,
        'csvData': csv_data
    })

    assert response.status_code == 200
    json_data = json.loads(response.data)
    for method in methods:
        assert method in json_data  # Ensure each method is in the results
        assert isinstance(json_data[method], dict)  # Check that the result is a dictionary


def test_forecast_close_low(test_client):
    # Create a valid CSV file
    valid_csv = "date,open,high,low,close,volume\n2023-01-01,100,110,90,105,1000\n2023-01-02,105,115,95,110,1500"
    test_client.post('/api/CSVupload', data={'file': (io.BytesIO(valid_csv.encode()), 'test.csv')})

    # Prepare data for forecasting
    csv_data = [
        {'date': '2023-01-01', 'open': 100, 'high': 110, 'low': 90, 'close': 105, 'volume': 1000},
        {'date': '2023-01-02', 'open': 105, 'high': 115, 'low': 95, 'close': 110, 'volume': 1500}
    ]

    methods = ['ResNLS','ARIMA','Prophet']  

    response = test_client.post('/api/forecast', json={
        'column': 'low',
        'methods': methods,
        'csvData': csv_data
    })

    assert response.status_code == 200
    json_data = json.loads(response.data)
    for method in methods:
        assert method in json_data  # Ensure each method is in the results
        assert isinstance(json_data[method], dict)  # Check that the result is a dictionary