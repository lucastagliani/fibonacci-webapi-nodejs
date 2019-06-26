const noteService = require('../services/noteService');

module.exports = (app, db) => {

    app.get('/notes', async (req, res) => {
        const result = await noteService.getAllNotes(db);
        res.send(result);
    });

    app.get('/notes/:id', async (req, res) => {
        const id = req.params.id;

        const result = await noteService.getOneNote(db, id);
        res.send(result);
    });

    app.post('/notes', async (req, res) => {
        const note = { text: req.body.text, title: req.body.title }

        const result = await noteService.createNote(db, note);
        res.send(result);
    });

    app.delete('/notes/:id', async (req, res) => {
        const id = req.params.id;

        const result = await noteService.deleteNote(db, id);
        res.send(result);
    });

    app.put('/notes/:id', async (req, res) => {
        const id = req.params.id;
        const note = { text: req.body.text, title: req.body.title };

        const result = await noteService.updateNote(db, id, note);
        res.send(result);
    });
};
