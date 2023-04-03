FROM node:alpine

RUN yarn global add expo-cli

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 19000
EXPOSE 19006

CMD [ "yarn", "web" ]
