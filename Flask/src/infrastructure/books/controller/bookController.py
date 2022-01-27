from flask import request
from src import appBook
from src.domain.books.service.createBookService import CreateBookService
from src.domain.books.service.getBooksService import GetBooksService
from src.domain.books.service.getBookByIdService import GetBookByIdService
from src.domain.books.service.updateBookService import UpdateBookService
from src.domain.books.service.deleteBookService import DeleteBookService
import uuid

@appBook.route('/books', methods=['GET'])
def get_books():
    return GetBooksService.execute()


@appBook.route('/books', methods=['Post'])
def create_book():
    title = request.json['title']
    author = request.json['author']
    read = request.json['read']

    return CreateBookService.execute(title, author, read)


@appBook.route('/books/<id>', methods=['GET'])
def get_book(id: uuid):
    return GetBookByIdService.execute(id)


@appBook.route('/books/<id>', methods=['PUT'])
def update_book(id: uuid):
    from src.infrastructure.books.models.bookModel import BookModel
    book = BookModel.query.get(id)

    title = request.json['title']
    author = request.json['author']
    read = request.json['read']

    book.title = title
    book.author = author
    book.read = read

    return UpdateBookService.execute(book)


@appBook.route('/books/<id>', methods=['DELETE'])
def delete_book(id: uuid):
    return DeleteBookService.execute(id)
