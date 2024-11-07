from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers.main import convertFromText

app = Flask(__name__)

CORS(app)  # Enable CORS for all routes

@app.route('/api/convert', methods=['POST'])
def handle_post_request():
    data = request.get_json()
    scssCode = convertFromText(data)
    return jsonify({'data': scssCode})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)

# from flask_socketio import SocketIO, emit

# app.config['SECRET_KEY'] = 'your-secret-key'
# socketio = SocketIO(app)

# def handle_css_to_scss(data):
#     scss_code = convertFromText(data['css_code'])
#     emit('scss-code', scss_code)

# if __name__ == '__main__':
#     socketio.run(app)
# if isinstance(data, str) and data == "LOL":
#     return jsonify({'message': 'Success', 'data': scssCode})
# else:
#     return jsonify({'message': 'Failure'})