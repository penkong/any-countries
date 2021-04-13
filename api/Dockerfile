FROM node:15-alpine

EXPOSE 5001
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .
COPY .env.production .env

RUN npm run build



USER node

CMD [ "node", "dist/index.js" ]