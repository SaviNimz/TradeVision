from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from datetime import datetime

# Create a Blueprint for Feedback
Feedback_handler = Blueprint('feedback_handler', __name__)

# Set up MongoDB client and database
client = MongoClient('mongodb+srv://Savinu:SaviYa1000!!@tradevision.6jkzn.mongodb.net/')  # MongoDB URI
db = client['tradevision']  # Database name
feedbacks_collection = db['Feedbacks']  # Collection name


@Feedback_handler.route('/api/feedbacks', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    
    # Extract feedback data
    name = data.get('name')
    email = data.get('email')
    feedback = data.get('feedback')

    if not name or not email or not feedback:
        return jsonify({'message': 'All fields are required'}), 400

    # Create a new feedback document
    new_feedback = {
        'name': name,
        'email': email,
        'feedback': feedback,
        'date': datetime.utcnow()  # Add timestamp
    }

    # Insert feedback into MongoDB
    feedbacks_collection.insert_one(new_feedback)

    return jsonify({'message': 'Feedback submitted successfully!'}), 201


@Feedback_handler.route('/api/Getfeedbacks', methods=['GET'])
def get_feedbacks():
    # Retrieve all feedback from MongoDB
    feedbacks = feedbacks_collection.find()
    
    # Convert feedbacks to a list and jsonify the result
    feedback_list = [{'name': fb['name'], 'email': fb['email'], 'feedback': fb['feedback'], 'date': fb['date']} for fb in feedbacks]
    
    return jsonify(feedback_list), 200
