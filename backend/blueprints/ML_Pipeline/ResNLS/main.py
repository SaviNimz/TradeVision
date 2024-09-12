from data_preprocessing import preprocess_data
from model_training import train_model
from model_validation import validate_model

if __name__ == "__main__":

    start_date = "2012-01-01"
    end_date = "2024-09-06"
    symbol = "AAPL"
    sequence_length = 5

    x_train, y_train, x_test, y_test, scaler, data, training_data_len = preprocess_data(start_date, end_date, symbol, sequence_length)
    model = train_model(x_train, y_train, x_test, y_test)
    validate_model(model, x_test, y_test, scaler, data, training_data_len)
