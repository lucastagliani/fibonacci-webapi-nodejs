const exceptionHandler = require('../exceptions/exceptionHandler');
const ObjectID = require('mongodb').ObjectID;

const STATUS_CODE = {
    OK: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 420,
    INTERNAL_SERVER_ERROR: 500
};

const COLLECTION_NAME = 'notes';

// TODO: create repository layer (it will be importante to mock data on tests)

const getAllNotes = async (db) => {
    const result = await db.collection(COLLECTION_NAME).find({}).toArray();
    
    // if (result.error) {
    //     return exceptionHandler.newException(STATUS_CODE.INTERNAL_SERVER_ERROR, 'An error has occurred on find');
    // }

    return result;
};

const getOneNote = async (db, id) => {
    const query = { '_id': new ObjectID(id) };

    const result = await db.collection(COLLECTION_NAME).findOne(query);

    // if (result.error) {
    //     return exceptionHandler.newException(STATUS_CODE.INTERNAL_SERVER_ERROR, 'An error has occurred on find');
    // }

    if (!result) {
        return exceptionHandler.newException(STATUS_CODE.NOT_FOUND, `There is no note with ID ${id}`);
    }

    return result;
};

const createNote = async (db, note) => {

    const result = await db.collection(COLLECTION_NAME).insertOne(note);

    if (result.error) {
        return exceptionHandler.newException(STATUS_CODE.INTERNAL_SERVER_ERROR, 'An error has occurred on insertOne');
    }

    return result.ops[0];
};

const updateNote = async (db, id, note) => {
    const query = { '_id': new ObjectID(id) };
    const result = await db.collection(COLLECTION_NAME).updateOne(query, { $set: note });

    if (result.error) {
        return exceptionHandler.newException(STATUS_CODE.INTERNAL_SERVER_ERROR, 'An error has occurred on updateOne');
    }

    if (!result.matchedCount) {
        return exceptionHandler.newException(STATUS_CODE.NOT_FOUND, `There is no note with ID ${id}`);
    }

    return note;

};

const deleteNote = async (db, id) => {
    const query = { '_id': new ObjectID(id) };

    const result = await db.collection(COLLECTION_NAME).deleteOne(query);

    if (result.error) {
        return exceptionHandler.newException(STATUS_CODE.INTERNAL_SERVER_ERROR, 'An error has occurred on remove');
    }

    if (!result.deletedCount) {
        return exceptionHandler.newException(STATUS_CODE.NOT_FOUND, `There is no note with ID ${id}`);
    }

    return { message: `Note ${id} deleted` };
};

// TODO: use for validation
const convertStringIdToObjectId = (id) => {
    if (!ObjectID.isValid(id)) {
        return exceptionHandler.newException(STATUS_CODE.BAD_REQUEST, 'Invalid ID');
    }

    return new ObjectID(id);
}

module.exports = {
    getAllNotes,
    getOneNote,
    createNote,
    updateNote,
    deleteNote,
}