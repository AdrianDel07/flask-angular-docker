import uuid
from src.application.command.bookCommand import BookCommand

class GetBookByIdService():
    def execute(id: uuid):
        return BookCommand.execute_get_by_id(id)