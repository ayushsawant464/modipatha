from flask import Flask, request, jsonify
from aksharamukha import transliterate
from flask_cors import CORS
import os, sys

app = Flask(__name__)
CORS(app)

# Endpoint to handle the transliteration
@app.route('/')
def home():
    return "Server has started!"  # testing if server ha started or not


# @app.route('/api/convert', methods=['POST'])
# def convert_modi_to_english():
#     print(f"Request received at port {request.host}")
#     data = request.json
#     text = data.get('text', '')
    
#     if not text:
#         return jsonify({'error': 'No text provided'}), 400
    
#     try:
#         # Transliterate the text from Modi to Latin (English)
#         converted_text = transliterate.process('autodetect', 'IAST', text)
#         print("Translated Text:", converted_text)  # Debug log

#         return jsonify({'translatedText': converted_text})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


@app.route('/api/convert', methods=['POST'])
def convert():
    print("Request received at port", request.host)
    try:
        data = request.get_json(force=True)
        print("Data:", data)
    except Exception as e:
        print("JSON parsing error:", e)
        return jsonify({"error": "Invalid JSON"}), 200

    # Dummy response to test
    return jsonify({"output": "processed"}), 200

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5001
    app.run(host='127.0.0.1', port=port)
