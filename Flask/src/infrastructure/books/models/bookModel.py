from app import db, ma

class BookModel(db.Model):
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(250), nullable=False)
    read = db.Column(db.Boolean(), nullable=False)

    def __init__(self, title, author, read):
        self.title = title
        self.author = author
        self.read = read

class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'author', 'read')

db.create_all()

book_schema = BookSchema()
books_schema = BookSchema(many=True)