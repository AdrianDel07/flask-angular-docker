from app import *
from src.infrastructure.books.controller import controller
from src.domain.books.service.createBookService import CreateBookService
from src.domain.books.service.getBooksService import GetBooksService
from src.domain.books.service.getBookByIdService import GetBookByIdService
from src.domain.books.service.updateBookService import UpdateBookService
from src.domain.books.service.deleteBookService import DeleteBookService

@controller.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to my API'})


@controller.route('/books', methods=['GET'])
def get_books():
  return GetBooksService.execute()

@controller.route('/books', methods=['Post'])
def create_book():
  title = request.json['title']
  author = request.json['author']
  read = request.json['read']

  return CreateBookService.execute(title, author, read)


@controller.route('/books/<id>', methods=['GET'])
def get_book(id: uuid):
  return GetBookByIdService.execute(id)

@controller.route('/books/<id>', methods=['PUT'])
def update_book(id: uuid):
  book = Book.query.get(id)

  title = request.json['title']
  author = request.json['author']
  read = request.json['read']

  book.title = title
  book.author = author
  book.read = read

  return UpdateBookService.execute(book)

@controller.route('/books/<id>', methods=['DELETE'])
def delete_book(id: uuid):
  return DeleteBookService.execute(id)
