#!/usr/bin/env python3
""" 
  Init module api library
"""
from flask import Blueprint

library = Blueprint("library", __name__, url_prefix="/api/v1")

from app.controller.library.index import *

from app.db.models.library import *