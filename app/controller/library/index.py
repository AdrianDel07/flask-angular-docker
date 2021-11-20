""" 
  Module of Library
"""
from flask import jsonify, abort
from app.controller.library import library

@library.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """ GET /api/v1/status
    Return:
      - the status of the API
    """
    return jsonify({"status": "OK"})
  
@library.route('/library', methods=['POST'], strict_slashes=False)
def post_library():
  """
    POST /api/v1/library
    Return:
      - status 200
  """
  return ('Hola')

@library.route('/library', methods=['GET'], strict_slashes=False)
def get_library():
  """
    GET /api/v1/library
    Return:
      - status 200
  """
  return ('Hola')

@library.route('/library', methods=['PUT'], strict_slashes=False)
def put_library():
  """
    GET /api/v1/library
    Return:
      - status 200
  """
  return ('Hola')

@library.route('/library', methods=['DELETE'], strict_slashes=False)
def delete_library():
  """
    GET /api/v1/library
    Return:
      - status 200
  """
  return ('Hola')
  