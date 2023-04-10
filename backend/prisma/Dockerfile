FROM node:alpine

RUN apk add --no-cache openssl

RUN npm install -g --unsafe-perm prisma

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD prisma studio
