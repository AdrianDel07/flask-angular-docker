from src.application.command.bookCommand import BookCommand

class CreateBookService():
    def execute(title: str, author: str, read: bool):
        return BookCommand.execute_create(title, author, read)