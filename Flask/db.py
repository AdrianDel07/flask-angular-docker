#!/usr/bin/env python3
"""
DB module
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.sql.sqltypes import Boolean
from user import Base, Book


class DB:
    """
    DB class
    """
    valid_args = ['id', 'title', 'author',
                  'read']

    def __init__(self):
        """
        Initialize DB
        """
        self._engine = create_engine(
            'postgresql://root:root@localhost:5432/source_meridian', echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self):
        """
            Session
        """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, title: str, author: str, read: Boolean) -> Book:
        """
            Save a book to the database
        """
        book = Book(title=title, author=author, read=read)
        self._session.add(book)
        self._session.commit()
        return book

    def find_book_by(self, **kwargs) -> Book:
        """
            Return the first row in the book table after filtering
        """
        if not kwargs:
            raise InvalidRequestError
        for arg in kwargs:
            if arg not in self.valid_args:
                raise InvalidRequestError
        book = self._session.query(Book).filter_by(**kwargs).first()
        if not book:
            raise NoResultFound
        return book

    def update_user(self, book_id: int, **kwargs) -> None:
        """ 
            Update book attributes  
        """
        book = self.find_book_by(id=book_id)
        for key, value in kwargs.items():
            if key not in self.valid_args:
                raise ValueError
            setattr(book, key, value)
        self._session.commit()

    def delete(self, book_id: int) -> None:
        """
            Delete book record by id
        """
        self._session.delete(book_id)
        self._session.commit()