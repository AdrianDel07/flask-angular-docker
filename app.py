from os import getenv
from app.controller.library import library
from flask import Flask, jsonify, abort, request
# from flask_cors import (CORS, cross_origin)

app = Flask(__name__)
app.register_blueprint(library)

if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5000")
    app.run(host=host, port=port, debug=True)