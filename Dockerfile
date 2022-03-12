FROM node:12.13.1-alpine3.10

RUN apk add g++ make python

WORKDIR /verifone

COPY package*.json ./

COPY /src ./

RUN npm install

RUN npx nestjs-command create:user

RUN npx nestjs-command create:products

CMD ["npm", "run", "start:debug"]