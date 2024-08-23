from flask import blueprints
from flask import request, jsonify
import os
from werkzeug.utils import secure_filename
from blueprints.ML_Pipeline.csv_validator import CSVValidator
from blueprints.ML_Pipeline.models import Models
import pandas as pd

CSV_Forecast_handler = blueprints.Blueprint('csv_forecast_handler', __name__)


models = Models()

UPLOAD_FOLDER = 'UPLOAD_FOLDER'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Define the route to handle file uploads
@CSV_Forecast_handler.route('/api/CSVupload', methods=['POST'])
def Handle_upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    # creating a validator object
    validator = CSVValidator()

    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        # Validation checks
        if not validator.validate_csv_structure(file_path):
            return jsonify({'error': 'Invalid CSV structure Your CSV file should contain date, open, high, low, close, volume Columns.'}), 400
        if not validator.check_empty_columns(file_path):
            return jsonify({'error': 'CSV contains empty columns'}), 400
        if not validator.validate_data_types(file_path):
            return jsonify({'error': 'Invalid data types in CSV'}), 400
        if not validator.check_duplicate_rows(file_path):
            return jsonify({'error': 'CSV contains duplicate rows'}), 400

        # sending the processed data to the frontend
        # make this modular later
        try:
            df = pd.read_csv(file_path)
            # Convert the DataFrame to a list of dictionaries
            csv_data = df.to_dict(orient='records')

            return jsonify({'success': 'File uploaded and processed successfully', 'data': csv_data}), 200

        except Exception as e:
            return jsonify({'error': f'Failed to read the CSV file: {str(e)}'}), 500
        
    else:
        return jsonify({'error': 'Invalid file type'}), 400



@CSV_Forecast_handler.route('/api/forecast', methods=['POST'])
def forecast():
    data = request.json
    column = data.get('column')

    # Handle case sensitivity of the column name
    column = column.capitalize() if column else column

    methods = data.get('methods')
    csv_data = data.get('csvData')  # Access the CSV data

    # Convert CSV data into a DataFrame
    df = pd.DataFrame(csv_data)
    
    print(column)
    results = {}

    for method in methods:
        try:
            forecast_result = models.forecast(method, df, column)
            print(forecast_result)
            # Convert forecast_result to a JSON serializable format
            if isinstance(forecast_result, pd.Series):
                results[method] = forecast_result.to_dict()  # Convert Series to a dictionary
            elif isinstance(forecast_result, pd.DataFrame):
                results[method] = forecast_result.to_dict(orient='records')  # Convert DataFrame to a list of records
            else:
                results[method] = forecast_result  # Handle other return types directly

        except Exception as e:
            results[method] = {"error": str(e)}  # Capture any errors in the forecasting process

    return jsonify(results)

@CSV_Forecast_handler.route('/api/forecast/save')
def save():
    return 'Save'