FROM python:3.8.10

WORKDIR /app/flask

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

ENTRYPOINT ["/app/entrypoint.sh"]