# notes-webapi-nodejs

Repository based on [this](https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/) tutorial.

Here you will find a simple node.js application with CRUD operations on model 'notes'.

## What you will see here: 

* [express](https://www.npmjs.com/package/mongodb)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [mongodb](https://www.npmjs.com/package/mongodb)

## How to run it

Open your terminal, choose your folder and...

1. Clone the repository: 

    HTTP: `git clone https://github.com/lucastagliani/notes-webapi-nodejs.git`
    or  
    SSH: `git clone git@github.com:lucastagliani/notes-webapi-nodejs.git`  

2. Enter the repository folder: `cd notes-webapi-nodejs`

3. Install dependencies: `npm install`

4. If you do not want to run Mongo locally, you will need to `docker-compose up -d`

5. Run API: `npm start`

    _It will be probably running on http://localhost:8000_

    <!-- TODO: ![Image](how-to-run-it.png "How to run it") -->

If you hit http://localhost:8000/notes on your browser or API app (for example Postman), you should get this returned: 

`{}`

Well, no data at all because you didn't posted anything.

## Documentation

* [Postman requests](https://www.getpostman.com/collections/c1854f5ad0a1568e0d5c)
<!-- TODO: Add API documentation -->






