from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from pymongo import MongoClient

User_handler = Blueprint('user_handler', __name__)

# Initialize Bcrypt
bcrypt = Bcrypt()

# Set up MongoDB client and database
client = MongoClient('mongodb+srv://Savinu:SaviYa1000!!@tradevision.6jkzn.mongodb.net/')  # MongoDB URI 
db = client['tradevision']  # database name
users_collection = db['users']  # collection name


@User_handler.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    email = data.get('email')
    password = data.get('password')

    # Check if the user exists
    user = users_collection.find_one({'email': email})
    if not user:
        return jsonify({'message': 'User not found'}), 404

    # Verify the password
    if bcrypt.check_password_hash(user['password'], password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid password'}), 401

@User_handler.route('/api/logout')
def logout():
    return 'Logout'

@User_handler.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Extract user data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if the user already exists
    existing_user = users_collection.find_one({'email': email})
    if existing_user:
        return jsonify({'message': 'User already registered'}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user document
    new_user = {
        'username': username,
        'email': email,
        'password': hashed_password,
    }

    # Insert the new user into the database
    users_collection.insert_one(new_user)

    return jsonify({'message': 'User successfully registered'}), 201
