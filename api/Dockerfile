FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .
COPY .env.production .env

RUN npm run build

ENV NODE_ENV production

EXPOSE 5000

USER node

CMD [ "node", "dist/index.js" ]