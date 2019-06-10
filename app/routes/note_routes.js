var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {

    app.get('/notes', (req, res) => {

        db.collection('notes').find({}).toArray((error, items) => {
            if (error) {
                res.status(500).send({ 'error': 'An error has occurred on find' });
            } else {
                res.send(items);
            }
        });
    });

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };

        db.collection('notes').findOne(query, (error, item) => {
            if (error) {
                res.status(500).send({ 'error': 'An error has occurred on find' });
            } else if (!item) {
                res.status(404).send({});
            } else {
                res.send(item);
            }
        });
    });

    app.post('/notes', (req, res) => {

        const note = { text: req.body.body, title: req.body.title }

        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.status(500).send({ 'error': 'An error has occurred on insertOne' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };

        db.collection('notes').deleteOne(query, (error, item) => {
            if (error) {
                res.status(500).send({ 'error': 'An error has occurred on remove' });
            } else if (!item.deletedCount) {
                res.status(404).send({});
            } else {
                res.send(`Note ${id} deleted`);
            }
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const query = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };

        db.collection('notes').updateOne(query, { $set: note }, (error, item) => {
            if (error) {
                res.status(500).send({ 'error': 'An error has occurred on updateOne' });
            } else if (!item.matchedCount) {
                res.status(404).send({});
            } else {
                res.send(note);
            }
        });
    });
};
