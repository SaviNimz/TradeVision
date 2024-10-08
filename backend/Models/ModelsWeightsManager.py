
import os

## need to change

def get_model_weight_path(symbol):

    current_file_path = os.path.abspath(__file__)
    current_dir = os.path.dirname(current_file_path)
    parent_dir = os.path.dirname(current_dir)

    model_path = os.path.join(parent_dir,f'{symbol}_model.pth')
    
    return model_path

