from app.infrastructure.books.entity.models.bookDto import Book
from sqlalchemy.orm.exc import NoResultFound
from app.application.command.bookCommand import BookCommand
from flask import jsonify, request

class BookService:
    """Book Service interact with database.
    """

    def execute_post(title: str, author: str) -> Book:
        """  execute post register"""
        
        return BookCommand.register_book(title, author)


    def execute_get() -> Book:
        """ get data"""

        return BookCommand.get_books()