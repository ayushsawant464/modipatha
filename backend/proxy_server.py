# proxy_server.py
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# List of backend servers
servers = [
    "http://127.0.0.1:5000",
    "http://127.0.0.1:5001",
    "http://127.0.0.1:5002"
]
current_server = 0

# Round-robin selector
def get_next_server():
    global current_server
    server = servers[current_server]
    current_server = (current_server + 1) % len(servers)
    return server

@app.route('/api/convert', methods=['POST'])
def proxy_request():
    server_url = get_next_server()
    try:
        resp = requests.post(f"{server_url}/api/convert", json=request.get_json())
        return jsonify(resp.json()), resp.status_code
    except Exception as e:
        return jsonify({'error': f'Proxy failed to reach backend: {str(e)}'}), 502

@app.route('/')
def health():
    return "Proxy Server is Running"

if __name__ == '__main__':
    app.run(port=8000)
