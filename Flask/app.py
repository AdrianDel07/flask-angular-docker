from flask import Flask, request, jsonify
from flask_cors import (CORS)

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
db = SQLAlchemy(app)
ma = Marshmallow(app)
app.config.from_object("config.Config")

CORS(app, resources={r"/api/v1/books*": {"origins": "*"}})

from src import appBook
app.register_blueprint(appBook)
