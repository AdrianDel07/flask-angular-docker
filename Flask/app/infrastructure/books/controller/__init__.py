from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/api/v1")

from app.infrastructure.books.controller.bookController import *
from app.domain.service.bookService import *
from app.application.command.bookCommand import *

from app.infrastructure.books.entity.models.bookDto import *