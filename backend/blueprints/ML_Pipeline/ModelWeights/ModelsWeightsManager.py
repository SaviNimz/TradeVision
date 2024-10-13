import os

## need to change the implementation 

def get_model_weight_path(symbol):

    current_file_path = os.path.abspath(__file__)
    current_dir = os.path.dirname(current_file_path)
    model_path = os.path.join(current_dir,f'{symbol}_model.pth')
    
    return model_path

