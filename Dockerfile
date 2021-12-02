
# Angular Container
FROM node:12.14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY /Angular/package.json /app/

RUN npm install

COPY . /app

RUN npm run build 

# NGINX 

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/Angular /usr/share/nginx/html