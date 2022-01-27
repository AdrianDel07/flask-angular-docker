import uuid
from flask import jsonify

from app import db

class BookRepository():
    def get_books():
        """ get_Boos Method """
        from src.infrastructure.books.models.bookModel import BookModel, books_schema

        all_books = BookModel.query.all()
        result = books_schema.dump(all_books)
        return jsonify(result)

    def create_book(title: str, author: str, read: bool):
        """ create Method """
        from src.infrastructure.books.models.bookModel import BookModel, book_schema

        new_book = BookModel(title, author, read)

        db.session.add(new_book)
        db.session.commit()

        return book_schema.jsonify(new_book)

    def get_book_by_id(id: uuid):
        """ get_book_by_id Method """
        from src.infrastructure.books.models.bookModel import BookModel, book_schema

        book = BookModel.query.get(id)
        return book_schema.jsonify(book)

    def update_book(book: object()):
        """ Update method """
        from src.infrastructure.books.models.bookModel import book_schema

        db.session.commit()

        return book_schema.jsonify(book)

    def delete_book(id: uuid):
        """ delete method """
        from src.infrastructure.books.models.bookModel import BookModel, book_schema

        book = BookModel.query.get(id)
        db.session.delete(book)
        db.session.commit()
        return book_schema.jsonify(book)