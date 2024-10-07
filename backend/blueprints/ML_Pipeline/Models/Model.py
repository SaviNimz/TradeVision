class Model:
    def __init__(self):
        self.model=None

    def preprocess_data(self,df,target_col):
        pass

    def train(self,df,target_col):
        raise NotImplementedError("Subclasses must implement train method.")
    
    def forecast_csv(self,df,target_col,forecast_steps):
        raise NotImplementedError("Subclasses must implement forecast_csv method.")
    
    def forecast_stock(self,data,forecast_steps):
        raise NotImplementedError("Subclasses must implement forecast_stock method.")
