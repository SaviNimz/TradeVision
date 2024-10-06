import pytest
from flask import Flask
from pymongo import MongoClient
from blueprints.FeedbackHandler.FeedbackHandler import Feedback_handler  

# Set up MongoDB client and database
client = MongoClient('mongodb+srv://Savinu:SaviYa1000!!@tradevision.6jkzn.mongodb.net/') 
db = client['tradevision'] 
feedbacks_collection = db['Feedbacks']  

@pytest.fixture
def app():
    app = Flask(__name__)
    app.register_blueprint(Feedback_handler)
    return app


@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture(autouse=True)
def clear_feedbacks():
    # Clear the feedbacks collection before each test
    feedbacks_collection.delete_many({})

def test_submit_feedback(client):
    response = client.post('/api/feedbacks', json={
        'name': 'John Doe',
        'email': 'john.doe@example.com',
        'feedback': 'This is a test feedback.'
    })
    
    assert response.status_code == 201
    assert response.json['message'] == 'Feedback submitted successfully!'

def test_submit_feedback_missing_fields(client):
    # Test submitting feedback with missing fields
    response = client.post('/api/feedbacks', json={
        'name': 'Jane Doe',
        'email': 'jane.doe@example.com'
        # Missing feedback field
    })
    
    assert response.status_code == 400
    assert response.json['message'] == 'All fields are required'

def test_get_feedbacks(client):
    client.post('/api/feedbacks', json={
        'name': 'John Doe',
        'email': 'john.doe@example.com',
        'feedback': 'This is a test feedback.'
    })

    response = client.get('/api/Getfeedbacks')
    
    assert response.status_code == 200
    feedbacks = response.json
    assert len(feedbacks) == 1  # Ensure we have one feedback
    assert feedbacks[0]['name'] == 'John Doe'
    assert feedbacks[0]['email'] == 'john.doe@example.com'
    assert feedbacks[0]['feedback'] == 'This is a test feedback.'
