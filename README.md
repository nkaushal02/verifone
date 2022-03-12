## Verifone Assignment

* Login API that with validation
* JWT Token
* Seeds
* Product list API
* API Documentation
* Docker Installation

# Pre-requisites 
* Node and npm should be installed from `https://nodejs.org/en/download/`
* Node version `v16.13.2`
* Install MongoDB `https://docs.mongodb.com/manual/installation/`
* Install Docker `https://www.docker.com/products/docker-desktop`

## Installation

```bash
$ npm install
```

## Create Environment Variable

Create a file called

```bash
.env
```

Copy and paste from

```bash
.env.sample
```

## How to run the app
**Using Docker**
```bash
# development
$ docker-compose up
```
**Using Npm start**

`make sure mongodb is running locally and please update the .env with relevent mongodb config value`
```bash
# development
$ npm run start
```
Application is served at

```bash
http://localhost:8080
```

API Doc is served at
```bash
http://localhost:8080/docs/v1
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Credentials 
```bash

# Signin With Seeds Credentials
Email: admin@test.com
Password: password

# Postman API Collection
verifone-api.postman_collection.json
import on POSTMAN and start using the API

```
