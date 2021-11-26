import uuid
from src.application.command.bookCommand import BookCommand

class DeleteBookService():
    def execute(id: uuid):
        return BookCommand.execute_delete(id)