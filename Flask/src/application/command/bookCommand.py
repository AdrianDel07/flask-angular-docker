import uuid
from src.infrastructure.books.adapter.repository.bookRepository import BookRepository

class BookCommand():
    """ BookCommand class pattern """

    def execute_create(title: str, author: str, read: bool):
        """ execute create method  """
        return BookRepository.create_book(title, author, read)

    def execute_get():
        """ execute get method """
        return BookRepository.get_books()

    def execute_get_by_id(id: uuid):
        """ execute get by id method """
        return BookRepository.get_book_by_id(id)

    def execute_update(book: object):
        """ execute update by id method """
        return BookRepository.update_book(book)

    def execute_delete(id: uuid):
        """ execute delete a record by id """
        return BookRepository.delete_book(id)