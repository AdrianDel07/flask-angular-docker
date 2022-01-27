
<div style="display: flex; align-items: baseline;">

![Imgur](https://i.imgur.com/Dj3btqd.png)

</div>


# flask-angular-docker
This project is using technologies with current versions and good code practice in business logic.

Tecnologies such as: 
- Docker
- Flask
- Angular
- Clean Code
- Hexagonal Architecture
- TypeScript

# Install 
before use the application, your could have some these applications:
- Docker
- docker-compose
- Python3
- Angular and Angular CLI

# Run App
create file in this path or rename the file ```env.dev``` to ```.env.dev```;
 
named ```.env.dev``` and add the following:
```
FLASK_APP=Flask/app.py
FLASK_ENV=development
DATABASE_URL=postgresql://root:root@db:5432/source_meridian
SQL_HOST=db
SQL_PORT=5432
DATABASE=postgres
```


Build the images and run the containers:
```
$ docker-compose up -d --build
```

# API

## swagger
see the swagger documentation API
```
http://127.0.0.1:5000/api/v1/
```

## Book
EndPoint by Book
```
http://127.0.0.1:5000/api/v1/books
```

## Angular App
Angular link APP

```
http://localhost:8080
```