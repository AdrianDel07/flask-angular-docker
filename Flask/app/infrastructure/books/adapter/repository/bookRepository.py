#!/usr/bin/env python3
"""
BookRepository module
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.sql.expression import true
from app.infrastructure.books.entity.models.bookDto import *
from flask import jsonify, request


class BookRepository:
    """
    BookRepository class
    """
    valid_args = ['id', 'title', 'author',
                  'read']

    def __init__(self):
        """
        Initialize DB
        """
        self._engine = create_engine(
            'postgresql://root:root@localhost:5432/source_meridian', echo=False)
        db.metadata.create_all(self._engine)
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

    def add_book(self, title: str, author: str, read: bool) -> Book:
        """
            Save a book to the database
        """
        book = Book(title=title, author=author)
        self._session.add(book)
        self._session.commit()
        return book

    def get_books() -> Book:
        """ Get Books """
        return Book.query.all()

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