from src.application.command.bookCommand import BookCommand

class UpdateBookService():
    def execute(book: object):
        return BookCommand.execute_update(book)