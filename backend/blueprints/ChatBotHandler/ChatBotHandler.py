from flask import Flask, request, jsonify,Blueprint
from blueprints.ChatBotService.ChatBotService import StockMarketChatbotService


chatbot_handler = Blueprint('chatbot_handler', __name__)


@chatbot_handler.before_app_request
def initialize_chatbot_service():
    global chatbot_service
    chatbot_service = StockMarketChatbotService()

@chatbot_handler.route('/api/get_answer', methods=['POST'])
def ask():
    # Get the question from the request
    data = request.json
    question = data.get('question')
    
    if not question:
        return jsonify({"error": "No question provided"}), 400
    
    # Get the chatbot response
    response = chatbot_service.chatbot(question)
    
    # Return the response as JSON
    return jsonify({"answer": response})