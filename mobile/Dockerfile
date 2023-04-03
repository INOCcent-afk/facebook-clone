FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 19000
EXPOSE 19001

CMD [ "yarn", "web" ]
