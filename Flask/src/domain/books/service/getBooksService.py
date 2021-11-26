from src.application.command.bookCommand import BookCommand

class GetBooksService():
    def execute():
        return BookCommand.execute_get()