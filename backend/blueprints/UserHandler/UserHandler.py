from flask import blueprints

User_handler = blueprints.Blueprint('user_handler', __name__)

@User_handler.route('/api/login')
def login():
    return 'Login'

@User_handler.route('/api/logout')
def logout():
    return 'Logout'


