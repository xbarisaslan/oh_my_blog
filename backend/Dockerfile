FROM node:16-alpine3.11

ENV NODE_ENV=production

ENV HOST 0.0.0.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY src /app

CMD ["npm", "start"]

