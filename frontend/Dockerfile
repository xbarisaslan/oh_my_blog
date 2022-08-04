FROM node:16-alpine3.11 AS BUILDER

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY .browserslistrc babel.config.js vue.config.js .env.production ./

COPY src ./src
COPY public ./public

RUN npm run build

FROM node:16-alpine3.11 

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT