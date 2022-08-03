FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY src /app

CMD [ "nodemon" ]