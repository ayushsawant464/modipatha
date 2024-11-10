from flask import Flask, request, jsonify
from aksharamukha import transliterate
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Endpoint to handle the transliteration
@app.route('/')
def home():
    return "Hello, World!"  # You can replace this with any content you'd like


@app.route('/api/convert', methods=['POST'])
def convert_modi_to_english():
    data = request.json
    text = data.get('text', '')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    try:
        # Transliterate the text from Modi to Latin (English)
        converted_text = transliterate.process('autodetect', 'IAST', text)
        print("Translated Text:", converted_text)  # Debug log

        return jsonify({'translatedText': converted_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
