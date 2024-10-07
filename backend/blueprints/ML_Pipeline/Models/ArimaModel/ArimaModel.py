from statsmodels.tsa.arima.model import ARIMA
from Model import Model
class ArimaModel(Model):
    def __init__(self,p=5,d=1,q=0):
        super().__init__()
        self.p=p
        self.d=d
        self.q=q

    def preprocess_data(self,df,target_col):
        return df[target_col]

    def train(self,df,target_col):

        data = self.preprocess_data(df,target_col)
        model = ARIMA(data, order=(self.p, self.d, self.q)) 
        model_fit = model.fit()
        self.model=model_fit

        return model_fit
    
    def forecast_csv(self,df,target_col='Close',forecast_steps=5):

        model=self.train(df,target_col)
        forecast = model.forecast(steps=forecast_steps)
        return forecast.to_list()
    
    def forecast_stock(self,data,forecast_steps):
        pass
 
