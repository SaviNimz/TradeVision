import json
import pytest
from flask import Flask
from blueprints.ChatBotService.ChatBotService import StockMarketChatbotService
from blueprints.ChatBotHandler.ChatBotHandler import chatbot_handler  

@pytest.fixture
def app():
    app = Flask(__name__)
    app.register_blueprint(chatbot_handler)
    return app

@pytest.fixture
def client(app):
    return app.test_client()

# Mock the StockMarketChatbotService for testing
class MockChatbotService:
    def chatbot(self, question):
        return "This is a mocked response to the question: " + question

@pytest.fixture(autouse=True)
def override_chatbot_service(monkeypatch):
    # Override the chatbot_service with the mock
    from blueprints.ChatBotService.ChatBotService import StockMarketChatbotService
    monkeypatch.setattr(StockMarketChatbotService, 'chatbot', MockChatbotService.chatbot)
    
def test_ask_with_valid_question(client):
    # Sample data for testing
    test_data = {'question': 'What is the stock price of AAPL?'}

    response = client.post('/api/get_answer', json=test_data)

    assert response.status_code == 200
    json_data = json.loads(response.data)
    assert 'answer' in json_data
    assert json_data['answer'] == "This is a mocked response to the question: What is the stock price of AAPL?"

def test_ask_with_missing_question(client):
    # Sample data for testing with missing question
    test_data = {}

    response = client.post('/api/get_answer', json=test_data)

    assert response.status_code == 400
    json_data = json.loads(response.data)
    assert 'error' in json_data
    assert json_data['error'] == "No question provided"
