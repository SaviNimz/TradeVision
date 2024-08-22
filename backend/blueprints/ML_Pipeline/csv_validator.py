import pandas as pd

class CSVValidator:
    def __init__(self):
        self.expected_columns = ['date', 'open', 'high', 'low', 'close', 'volume']  

    def allowed_file(self, filename):
        allowed_extensions = {'csv'}
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions

    def validate_csv_structure(self, file_path):
        df = pd.read_csv(file_path)
        # Normalize the column names to lowercase for comparison
        actual_columns = [col.lower() for col in df.columns]
        return set(self.expected_columns).issubset(actual_columns)

    def check_empty_columns(self, file_path):
        df = pd.read_csv(file_path)
        return not df.isnull().all(axis=0).any()
    
    def validate_data_types(self, file_path):
        df = pd.read_csv(file_path)

        # Convert the 'date' column to datetime
        if 'date' in df.columns:
            df['date'] = pd.to_datetime(df['date'], errors='coerce')
            if df['date'].isnull().any():
                return False  # If conversion failed, return False

        # Check if all other columns are numeric
        numeric_columns = ['open', 'high', 'low', 'close', 'volume']
        for col in numeric_columns:
            if col in df.columns and not pd.api.types.is_numeric_dtype(df[col]):
                return False  # Return False if any column is not numeric

        return True  # Return True if all checks passed

    def check_duplicate_rows(self, file_path):
        df = pd.read_csv(file_path)
        return df.duplicated().sum() == 0