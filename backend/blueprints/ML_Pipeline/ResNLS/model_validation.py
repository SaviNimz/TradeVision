import numpy as np
from sklearn import metrics
import torch

def validate_model(model, x_test, y_test, scaler, data, training_data_len):
    # Set device
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    
    # Prepare validation data
    val_input = torch.tensor(x_test, dtype=torch.float).to(device)
    val_target = torch.tensor(y_test, dtype=torch.float).to(device)

    # Get the model predicted price values
    model.eval()
    with torch.no_grad():
        predictions = model(val_input)
    
    # Inverse transform the predictions to original scale
    predictions = scaler.inverse_transform(predictions.cpu().detach().numpy())
    
    # Plot the stock price
    train = data[:training_data_len]
    valid = data[training_data_len:]
    valid["predictions"] = predictions
    
    # Calculate MSE
    y = np.array(valid["Close"])
    y_hat = np.array(valid["predictions"])
    mae = metrics.mean_absolute_error(y_hat, y)
    mse = metrics.mean_squared_error(y_hat, y)
    rmse = metrics.mean_squared_error(y_hat, y) ** 0.5
    print("MAE:{:.2F}   MSE: {:.2f}   RMSE:{:.2F}".format(mae, mse, rmse))
