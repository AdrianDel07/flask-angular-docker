from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String


from sqlalchemy.sql.expression import true
from sqlalchemy.sql.sqltypes import Boolean
import uuid

Base = declarative_base()

class Library(Base):
  __tablename__ = 'library'

  id = uuid.UUID(editable=False, unique=True, default=uuid.uuid4)
  title = Column(String(250), nullable=False)
  author = Column(String(250), nullable=False)
  read = Column(Boolean, default=False)