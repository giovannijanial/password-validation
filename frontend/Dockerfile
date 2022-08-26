FROM node:16.16.0-alpine

WORKDIR /usr/app/frontend

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]