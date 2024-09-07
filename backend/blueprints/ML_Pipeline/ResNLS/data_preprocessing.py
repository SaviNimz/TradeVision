import yfinance as yf
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import math

def download_data(symbol, start_date, end_date):
    return yf.download(symbol, start=start_date, end=end_date, interval="1d")

def create_dataset(df):
    data = pd.DataFrame(pd.to_numeric(df["Close"]))
    dataset = np.reshape(data.values, (df.shape[0], 1))

    scaler = MinMaxScaler(feature_range=(0,1))
    scaled_data = scaler.fit_transform(dataset)
    return scaled_data, scaler, data

def split_data(dataset, train_day, predict_day):
    x, y = [], []
    for i in range(train_day, len(dataset) - predict_day + 1):
        x.append(dataset[i - train_day: i, 0])
        y.append(dataset[i + predict_day - 1, 0])
    return x, y

def reshape_data(train_data, test_data, days):
    x_train, y_train = split_data(train_data, days, 1)
    x_test, y_test = split_data(test_data, days, 1)
    x_train, y_train = np.array(x_train), np.array(y_train)
    x_test, y_test = np.array(x_test), np.array(y_test)
    x_train = np.reshape(x_train, (x_train.shape[0], 1, x_train.shape[1]))
    x_test = np.reshape(x_test, (x_test.shape[0], 1, x_test.shape[1]))
    return x_train, y_train, x_test, y_test

def preprocess_data(start_date, end_date, symbol, sequence_length):
    df = download_data(symbol, start_date, end_date)
    scaled_data, scaler, data = create_dataset(df)

    training_data_len = math.ceil(len(scaled_data) * 0.9087)
    train_data = scaled_data[0:training_data_len, :]
    test_data = scaled_data[training_data_len - sequence_length:, :]

    x_train, y_train, x_test, y_test = reshape_data(train_data, test_data, sequence_length)

    return x_train, y_train, x_test, y_test, scaler, data, training_data_len
