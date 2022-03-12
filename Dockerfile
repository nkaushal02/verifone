FROM node:12.13.1-alpine3.10

RUN apk add g++ make python

WORKDIR /verifone

COPY package*.json ./

RUN npm install

COPY tsconfig.json tsconfig.build.json nest-cli.json ./

COPY src src

CMD ["npm", "run", "start:debug"]