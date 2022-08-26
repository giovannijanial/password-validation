FROM node:16.16.0-alpine

WORKDIR /usr/app/api

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]