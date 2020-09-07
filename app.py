from flask import Flask, jsonify
app = Flask(__name__, static_folder='client/dist/client', static_url_path='/')

@app.route('/heartbeat')
def heartbeat():
    return jsonify({'status': 'healthy'})

@app.route('/')
def index():
    return app.send_static_file('index.html')
