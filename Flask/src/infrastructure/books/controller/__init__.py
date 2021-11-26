from flask import Blueprint

controller = Blueprint("controller", __name__, url_prefix="/api/v1")

from src.infrastructure.books.controller.bookController import *