import torch
import torch.nn as nn

class ResNLSModel(nn.Module):
    def __init__(self, n_input=3, n_hidden=64):
        super(ResNLSModel, self).__init__()

        self.n_input = n_input
        self.n_hidden = n_hidden

        # Initialize weights of the attention mechanism
        self.weight = nn.Parameter(torch.zeros(1))

        # Initialize CNN structure
        self.cnn = nn.Sequential(
            nn.Conv1d(in_channels=1, out_channels=self.n_hidden, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm1d(self.n_hidden, eps=1e-5),
            nn.Dropout(0.1),

            nn.Conv1d(in_channels=self.n_hidden, out_channels=self.n_hidden, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm1d(self.n_hidden, eps=1e-5),

            nn.Flatten(),
            nn.Linear(self.n_input * self.n_hidden, self.n_input)
        )

        # Initialize LSTM structure
        self.lstm = nn.LSTM(self.n_input, self.n_hidden, batch_first=True, bidirectional=False)
        self.linear = nn.Linear(self.n_hidden, 1)

    def forward(self, x):
        cnn_output = self.cnn(x)
        cnn_output = cnn_output.view(-1, 1, self.n_input)

        residuals = x + self.weight * cnn_output

        _, (h_n, _) = self.lstm(residuals)
        y_hat = self.linear(h_n[0, :, :])

        return y_hat
