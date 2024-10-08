class Model:
    def __init__(self):
        self.model=None

    def preprocess_data(self,df,target_col):
        pass

    def train(self,df,target_col):
        raise NotImplementedError("Subclasses must implement train method.")
    
    def forecast(self, df, target_col, n_future, model_weights_path):
        raise NotImplementedError("Subclasses must implement forecast_csv method.")
