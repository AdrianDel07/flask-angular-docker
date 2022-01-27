from src import appBook
from flask_restplus import Api, Resource, fields
from src.infrastructure.books.swagger.dao.bookDao import BookDao

api = Api(appBook, version='1.0', title='Book API',
          description='A simple Book API',
          )

book = api.model('Book', {
    'id': fields.String(readOnly=True, description='The book unique identifier'),
    'title': fields.String(required=True, description='The book title'),
    'author': fields.String(required=True, description='The book author'),
    'read': fields.Boolean(required=True, description='The book read'),
})

ns = api.namespace('api/v1', description='Book operations')

DAO = BookDao()
DAO.create({'book': 'Build an API'})
DAO.create({'book': '?????'})
DAO.create({'book': 'profit!'})


@ns.route('/books')
class Book(Resource):
    '''Shows a list of all books, and lets you POST to add new tasks'''
    @ns.doc('list_books')
    @ns.marshal_list_with(book, code=200)
    def get(self):
        '''List all books'''
        return (DAO.books), 200

    @ns.doc('create_book')
    @ns.expect(book)
    @ns.marshal_with(book, code=201)
    def post(self):
        '''Create a new book'''
        return DAO.create(api.payload), 201

    @ns.doc('update_book', params={'id': 'Id for the Book'})
    @ns.expect(book)
    @ns.marshal_with(book, code=200)
    def put(self):
        '''Update a book'''
        return DAO.update(api.payload), 200

    @ns.doc('delete_book', params={'id': 'Id for the Book'})
    @ns.expect({})
    @ns.marshal_with(book, code=200)
    def delete(self):
        '''Delete a book'''
        return DAO.delete(api.payload), 200
