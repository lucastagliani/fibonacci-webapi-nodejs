const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/notes';

const app = express();

app.use(bodyParser.json());

MongoClient.connect(MONGODB_URL, { useNewUrlParser: true }, (error, database) => {  
    if (error) {
        return console.log(error)                        
    }

    const notesdb = database.db("notes-db")  
    require('./app/routes')(app, notesdb);

    app.listen(PORT, () => {
        console.log('Started on port', PORT);
    });
})