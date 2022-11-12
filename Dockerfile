FROM nginx:1.22.0-alpine

WORKDIR /app

COPY . .

RUN cp -r . /usr/share/nginx/html