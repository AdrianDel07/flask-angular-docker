from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy.dialects.postgresql import UUID
import uuid
from src.infrastructure.books.controller import controller
from flask_cors import (CORS, cross_origin)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://root:root@localhost:5432/source_meridian'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
app.register_blueprint(controller)

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Book(db.Model):
    __tablename__ = 'book'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4())
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(250), nullable=False)
    read = db.Column(db.Boolean(), nullable=False)

    def __init__(self, title, author, read):
        self.title = title
        self.author = author
        self.read = read

db.create_all()

class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'author', 'read')


book_schema = BookSchema()
books_schema = BookSchema(many=True)


if __name__ == "__main__":
    app.run(debug=True)