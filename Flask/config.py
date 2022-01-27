import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SQLALCHEMY_DATABASE_URI = "postgresql://root:root@db:5432/source_meridian"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
