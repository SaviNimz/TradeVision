from .model_definition import create_LSTM_model
from sklearn.preprocessing import MinMaxScaler
import numpy as np
from ..Utils import preprocesser
from ..Model import Model


class LSTMModel(Model):
    def __init__(self,n_input=3):
        super().__init__()
        self.scaler=None
        self.n_input=n_input
        self.train_split = 0.95
        self.epochs=50
        self.batch_size=32

    def preprocess_data(self,df,target_col):  

        data=df[target_col]
         
        self.scaler = MinMaxScaler(feature_range=(0, 1))
        series = self.scaler.fit_transform(np.array(data).reshape(-1,1))

        X_data = np.array([series[i-self.n_input:i, 0] for i in range(self.n_input, len(series))])
        y_data = np.array(series[self.n_input:, -1]).reshape(-1, 1)

        X_train,y_train,X_test,y_test=preprocesser.train_test_split(X_data,y_data,self.train_split)

        return X_train,y_train,X_test,y_test 


    def train(self,df,target_col):
        """Train LSTM model."""
        try:
            X_train,y_train,X_test,y_test = self.preprocess_data(df,target_col)
            model=create_LSTM_model(self.n_input)
            
            model.fit(X_train, y_train, epochs=self.epochs, batch_size=self.batch_size, verbose=0)

            print('Training Completed')

        except Exception as e:
            print(f"Error during LSTM training: {e}")
            raise e    
        
        self.model=model
        return model
    
    def forecast_csv(self,df,target_col='Close',forecast_steps=5):

        model = self.train(df,target_col)

        input_seq=self.scaler.transform(np.array(df[target_col][-self.n_input:]).reshape(-1,1)).reshape(1,self.n_input,1)

        predictions=[]
        for _ in range(forecast_steps):
            prediction=model.predict(input_seq)
            predictions.append(prediction)

            input_seq=np.concatenate((input_seq,prediction.reshape(1,1,1)),axis=1)[:,1:]

        results =np.array(predictions).flatten()

        results_tras= self.scaler.inverse_transform(results.reshape(-1,1)).flatten()

        return  results_tras.tolist()
    
    
    def forecast_stock(self,config):
        pass



