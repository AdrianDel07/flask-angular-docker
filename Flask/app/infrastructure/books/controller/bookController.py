
from app.infrastructure.books.controller import app_views
from flask import jsonify, request
from app.application.command.bookCommand import BookCommand
from app.domain.service.bookService import BookService


@app_views.route('/hook', methods=['GET'])
def hello():
    """ GET /  Return: welcome message """
    return jsonify({"message": "Success"})


@app_views.route('/books', methods=['POST'])
def post():
    """ POST /books """
    title = request.form.get('title')
    author = request.form.get('author')
    read = request.form.get('read')
    
    BookService.execute_post(title, author)
    return jsonify({"data": {"title": title, "author": author, "read": read}, "message": "book created"}), 200
   
@app_views.route('/books', methods=['GET'])
def get():
    """ GET /  Return: welcome message """
    return BookService.execute_get()
