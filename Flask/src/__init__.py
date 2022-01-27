from flask import Blueprint

appBook = Blueprint("appBook", __name__, url_prefix="/api/v1")

from src.infrastructure.books.controller.bookController import *
from src.infrastructure.books.swagger.bookSwagger import *