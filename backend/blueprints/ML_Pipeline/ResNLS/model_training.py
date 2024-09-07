import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.metrics import mean_absolute_error, mean_squared_error
from model_definition import ResNLS  # Import the ResNLS class

def train_model(x_train, y_train, x_test, y_test):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = ResNLS().to(device)

    # Prepare validation data
    val_input = torch.tensor(x_test, dtype=torch.float).to(device)
    val_target = torch.tensor(y_test, dtype=torch.float).to(device)

    # Initialization
    epochs = 50
    batch_size = 64

    # Loss function and optimizer
    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=1e-3)

    # Mini-batch training
    if x_train.shape[0] % batch_size == 0:
        batch_num = int(x_train.shape[0] / batch_size)
    else:
        batch_num = int(x_train.shape[0] / batch_size) + 1

    for epoch in range(epochs):
        for j in range(batch_num):
            # Prepare training data
            train_input = torch.tensor(x_train[j * batch_size: (j + 1) * batch_size], dtype=torch.float).to(device)
            train_target = torch.tensor(y_train[j * batch_size: (j + 1) * batch_size], dtype=torch.float).to(device)

            # Training
            model.train()
            optimizer.zero_grad()
            train_output = model(train_input)
            train_loss = criterion(train_output, train_target)
            train_loss.backward()
            optimizer.step()

        if (epoch + 1) % (epochs / 20) == 0:
            with torch.no_grad():
                model.eval()
                val_output = model(val_input)
                val_loss = criterion(val_output, val_target)
                print("Epoch: {:>3}, train loss: {:.4f}, val loss: {:.4f}".format(epoch + 1, train_loss.item(), val_loss.item()))

    return model
