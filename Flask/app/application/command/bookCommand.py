from app.infrastructure.books.adapter.repository.bookRepository import BookRepository
from app.infrastructure.books.entity.models.bookDto import Book
from sqlalchemy.orm.exc import NoResultFound


class BookCommand:
    """Book Command interact with database.
    """

    def __init__(self):
        self._db = BookRepository()

    def register_book(self, title: str, author: str):
        """  Register a new book  """
        print(title, author)
        return self._db.add_book(title, author)

    def get_books() -> Book:
        """"""
        return BookRepository.get_books()


    def get_user_from_session_id(self, session_id: str) -> str:
        """
        Get the user corresponding to the session ID
        """
        try:
            if not session_id:
                return
            user = self._db.find_user_by(session_id=session_id)
            return user
        except Exception:
            return

    def destroy_session(self, user_id: int) -> None:
        """
        Update the user's session ID to None
        """
        try:
            if not user_id:
                return
            user = self._db.find_user_by(id=user_id)
            self._db.update_user(user.id, session_id=None)
        except Exception:
            return

    def update_password(self, reset_token: str, password: str) -> None:
        """
        Update user password
        """
        try:
            user = self._db.find_user_by(reset_token=reset_token)
            self._db.update_user(user.id,
                                 hashed_password=password,
                                 reset_token=None)
        except Exception:
            raise ValueError
