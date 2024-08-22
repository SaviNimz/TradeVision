from flask import blueprints
from flask import request, jsonify
import os
from werkzeug.utils import secure_filename


CSV_Forecast_handler = blueprints.Blueprint('csv_forecast_handler', __name__)

# Define allowed file types (you can add more extensions if needed)
ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Define the route to handle file uploads
@CSV_Forecast_handler.route('/api/CSVupload', methods=['POST'])
def forecast():
    # Check if the 'file' part is in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    # If no file is selected
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Check if the file is allowed
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        
        # Save the file to the desired location (e.g., UPLOAD_FOLDER)
        file.save(os.path.join('UPLOAD_FOLDER', filename))
        
        # Here, you can add code to process the CSV file as needed

        return jsonify({'success': 'File uploaded and processed successfully'}), 200
    else:
        return jsonify({'error': 'Invalid file type'}), 400
@CSV_Forecast_handler.route('/api/forecast/save')
def save():
    return 'Save'

