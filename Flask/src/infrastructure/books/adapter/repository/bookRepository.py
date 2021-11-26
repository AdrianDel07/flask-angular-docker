from app import *


class BookRepository():
    def get_books():
        """ get_Boos Method """

        all_books = Book.query.all()
        result = books_schema.dump(all_books)
        return jsonify(result)

    def create_book(title: str, author: str, read: bool):
        """ create Method """

        new_book = Book(title, author, read)

        db.session.add(new_book)
        db.session.commit()

        return book_schema.jsonify(new_book)

    def get_book_by_id(id: uuid):
        """ get_book_by_id Method """

        book = Book.query.get(id)
        return book_schema.jsonify(book)

    def update_book(book: object()):
        """ Update method """

        db.session.commit()

        return book_schema.jsonify(book)

    def delete_book(id: uuid):
        book = Book.query.get(id)
        db.session.delete(book)
        db.session.commit()
        return book_schema.jsonify(book)