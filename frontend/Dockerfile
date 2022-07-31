FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY public ./public
COPY .browserslistrc vue.config.js babel.config.js ./ 

CMD [ "npm","run","serve" ]