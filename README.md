# notes-webapi-nodejs

[![CircleCI](https://circleci.com/gh/lucastagliani/notes-webapi-nodejs.svg?style=svg)](https://circleci.com/gh/lucastagliani/notes-webapi-nodejs)
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge&style=flat)](https://notes-webapi-nodejs.herokuapp.com/notes)

Repository based on [this](https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/) tutorial.

Here you will find a simple node.js application with CRUD operations on model 'notes'.

## What you will see here: 

* [express](https://www.npmjs.com/package/mongodb)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [mongodb](https://www.npmjs.com/package/mongodb)

## How to run it

Open your terminal, go to your projects folder and...

1. Clone the repository: 

    HTTP: `git clone https://github.com/lucastagliani/notes-webapi-nodejs.git`  
    or  
    SSH: `git clone git@github.com:lucastagliani/notes-webapi-nodejs.git`  

2. Enter the repository folder: `cd notes-webapi-nodejs`

3. Install dependencies: `npm install`

4. You have 2 options for running this webapi:

    A. The easiest way is with `docker-compose up -d`. It will start a container with mongo server AND the webapi itself. _You will need [docker-compose](https://docs.docker.com/compose/) on your computer_. 

    or

    B. Start mongo server locally with `mongod` and, after it is up, start the web app with `npm start`. _You will need [mongo server](https://www.mongodb.com/download-center/community) on your computer_.

    _It will be probably running on http://localhost:8000_

    <!-- TODO: ![Image](how-to-run-it.png "How to run it") -->

If you hit http://localhost:8000/notes on your browser or API app (for example Postman), you should get this returned: 

`[]`

Well, no data at all because you didn't posted anything.

## Documentation

You can do the basic CRUD operations, you will find the requests here: * [Postman requests](https://www.getpostman.com/collections/c1854f5ad0a1568e0d5c)
<!-- TODO: Add API documentation -->

## Extra

Dockerfile built based on [this](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/) tutorial




