from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class Library(db.Model):
  __tablename__ = 'library'

  id = db.UUIDField(editable=False, unique=True, default=uuid.uuid4)
  title = db.Column(db.String, nullable=False)
  author = db.Column(db.String, nullable=False)
  read = db.Column(db.Boolean, default=False)

  @classmethod
  def create(cls, username):
    user = User(username=username)
    return user.save()

  def save(self):
    try:
      db.session.add(self)
      db.session.commit()

      return self
    except:
      return False