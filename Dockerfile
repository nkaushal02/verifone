FROM node:12.13.1-alpine3.10

WORKDIR /sample-api

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "start:debug"]