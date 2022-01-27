from flask.cli import FlaskGroup
from app import app, db

cli = FlaskGroup(app)

@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command("seed_db")
def seed_db():
    from src.infrastructure.books.models import BookModel
    db.session.add(BookModel(title="Spider-Man: No Way Home", author="Jon Watts", read=True))
    db.session.commit()


if __name__ == "__main__":
    cli()
