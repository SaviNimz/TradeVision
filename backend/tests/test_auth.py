import pytest
from flask import Flask, jsonify
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from blueprints.UserHandler.UserHandler import User_handler

# Initialize Flask app
app = Flask(__name__)
app.register_blueprint(User_handler)

# Initialize Bcrypt
bcrypt = Bcrypt()

# Set up MongoDB client and database
client = MongoClient('mongodb+srv://Savinu:SaviYa1000!!@tradevision.6jkzn.mongodb.net/')  
db = client['tradevision']
users_collection = db['users']

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

@pytest.fixture(autouse=True)
def clear_db():
    # Clear the users collection before each test
    users_collection.delete_many({})

def test_register(client):
    # Test user registration
    response = client.post('/api/register', json={
        'username': 'testuser',
        'email': 'testuser@example.com',
        'password': 'password123'
    })
    assert response.status_code == 201
    assert b'User successfully registered' in response.data

    # Test duplicate registration
    response = client.post('/api/register', json={
        'username': 'testuser',
        'email': 'testuser@example.com',
        'password': 'password123'
    })
    assert response.status_code == 400
    assert b'User already registered' in response.data

def test_login(client):
    # First, register a user
    client.post('/api/register', json={
        'username': 'testuser',
        'email': 'testuser@example.com',
        'password': 'password123'
    })

    # Test successful login
    response = client.post('/api/login', json={
        'email': 'testuser@example.com',
        'password': 'password123'
    })
    assert response.status_code == 200
    assert b'Login successful' in response.data

    # Test invalid password
    response = client.post('/api/login', json={
        'email': 'testuser@example.com',
        'password': 'wrongpassword'
    })
    assert response.status_code == 401
    assert b'Invalid password' in response.data

    # Test non-existing user
    response = client.post('/api/login', json={
        'email': 'nonexistent@example.com',
        'password': 'password123'
    })
    assert response.status_code == 404
    assert b'User not found' in response.data

def test_logout(client):
    response = client.get('/api/logout')
    assert response.status_code == 200
    assert b'Logout' in response.data
