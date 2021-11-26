#!/usr/bin/env python3
""" create user table """


from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import Column, String
from sqlalchemy.sql.expression import true
from sqlalchemy.sql.sqltypes import Boolean, Integer
from flask_sqlalchemy import SQLAlchemy
import uuid

Base = declarative_base()

db = SQLAlchemy()

class Book(db.Model):
    """ class user """
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    author = db.Column(db.String(250), nullable=False)

    def __init__(self, title, author):
        self.title = title
        self.author = author
