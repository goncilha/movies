FROM node:latest

RUN mkdir -p /usr/app
WORKDIR /usr/app
ADD package.json /usr/app
RUN yarn add nodemon
RUN yarn install