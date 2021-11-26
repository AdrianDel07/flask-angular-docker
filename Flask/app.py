#!/usr/bin/env python3
"""
SQLAlchemy model Books
"""
from flask import Flask
from app.application.command.bookCommand import BookCommand
from app.infrastructure.books.controller import app_views


app = Flask(__name__)
app.register_blueprint(app_views)
app.url_map.strict_slashes = False
BookCommand = BookCommand()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
