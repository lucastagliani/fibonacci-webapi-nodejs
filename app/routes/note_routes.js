var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.post('/notes', (req, res) => {

        const note = { text: req.body.body, title: req.body.title }

        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred on insertOne' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('notes').findOne(details, (error, item) => {
            if (error) {
                res.send({ 'error': 'An error has occurred on find' });
            } else if (!item) {
                res.status(404).send({});
            } else {
                res.send(item);
            }
        });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('notes').deleteOne(details, (error, item) => {
            if (error) {
                res.send({ 'error': 'An error has occurred on remove' });
            } else if (!item) {
                res.status(404).send({});
            } else {
                res.send(`Note ${id} deleted`);
            }
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };

        db.collection('notes').updateOne(details, note, (error, item) => {
            if (error) {
                res.send({ 'error': 'An error has occurred on remove' });
            } else if (!item) {
                res.status(404).send({});
            } else {
                res.send(note);
            }
        });
    });
};
