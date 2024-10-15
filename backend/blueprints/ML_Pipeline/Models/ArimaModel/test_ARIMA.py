import pytest
import pandas as pd
from blueprints.ML_Pipeline.Models.ArimaModel.ArimaModel import ArimaModel  # Absolute import

@pytest.fixture
def sample_data():
    """Fixture to provide sample data for testing."""
    data = {
        'Date': pd.date_range(start='2021-01-01', periods=10),
        'Close': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    return pd.DataFrame(data)

def test_arima_model_initialization():
    """Test the initialization of the ARIMA model."""
    model = ArimaModel()
    assert model.p == 5
    assert model.d == 1
    assert model.q == 0
    assert model.model is None  # Ensure model is not trained yet

def test_preprocess_data(sample_data):
    """Test the preprocess_data method."""
    model = ArimaModel()
    processed_data = model.preprocess_data(sample_data, 'Close')
    assert processed_data.equals(sample_data['Close'])  # Check if the returned series is the same

def test_train(sample_data):
    """Test the train method of the ARIMA model."""
    model = ArimaModel()
    model_fit = model.train(sample_data, 'Close')
    
    assert model.model is not None  # Ensure the model has been trained
    assert hasattr(model_fit, 'fittedvalues')  # Check if fittedvalues exist in the fitted model

def test_forecast(sample_data):
    """Test the forecast method of the ARIMA model."""
    model = ArimaModel()
    model.train(sample_data, 'Close')  # Train the model first
    forecasted_values = model.forecast(sample_data, 'Close', forecast_steps=3)

    assert len(forecasted_values) == 3  # Ensure the length of the forecast matches forecast_steps
    assert isinstance(forecasted_values, list)  # Check if the output is a list
    assert all(isinstance(value, float) for value in forecasted_values)  # Ensure all forecasted values are floats

