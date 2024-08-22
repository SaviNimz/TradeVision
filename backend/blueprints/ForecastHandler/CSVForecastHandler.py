from flask import blueprints
from flask import request, jsonify
import os
from werkzeug.utils import secure_filename
from blueprints.Validators.csv_validator import CSVValidator

CSV_Forecast_handler = blueprints.Blueprint('csv_forecast_handler', __name__)

# Define allowed file types (you can add more extensions if needed)
ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

UPLOAD_FOLDER = 'UPLOAD_FOLDER'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


# Define the route to handle file uploads
@CSV_Forecast_handler.route('/api/CSVupload', methods=['POST'])
def forecast():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    # creating a validator object
    validator = CSVValidator()

    if file and validator.allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        # Validation checks
        if not validator.validate_csv_structure(file_path):
            return jsonify({'error': 'Invalid CSV structure'}), 400
        if not validator.check_empty_rows(file_path):
            return jsonify({'error': 'CSV contains empty rows'}), 400
        if not validator.validate_data_types(file_path):
            return jsonify({'error': 'Invalid data types in CSV'}), 400
        if not validator.check_duplicate_rows(file_path):
            return jsonify({'error': 'CSV contains duplicate rows'}), 400
        return jsonify({'success': 'File uploaded and processed successfully'}), 200
    else:
        return jsonify({'error': 'Invalid file type'}), 400
    


@CSV_Forecast_handler.route('/api/forecast/save')
def save():
    return 'Save'

