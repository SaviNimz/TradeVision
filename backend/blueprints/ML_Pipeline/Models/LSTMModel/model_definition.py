from keras.models import Sequential
from keras.layers import LSTM, Dense, Dropout

def create_LSTM_model(n_input):
    model = Sequential()
    model.add(LSTM(50, activation='relu', input_shape=(n_input, 1),return_sequences=False))
    model.add(Dropout(0.2))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mean_squared_error')
    
    return model
