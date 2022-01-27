#ANGULAR Container
FROM node:12.14-alpine as node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# NGINX 
FROM nginx:1.20.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/src/app/dist/angular /usr/share/nginx/html
