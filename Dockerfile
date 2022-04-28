FROM node:16-alpine
FROM mcr.microsoft.com/playwright:focal

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g nodemon
RUN npx playwright install

COPY . .

EXPOSE 5000