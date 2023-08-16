const createError = require('../createError');
const artistModel = require('../models/artist');
const { handleGetAll, handleGetById, handleDeleteById } = require('../utils');

const getAll = handleGetAll(artistModel, q => artist =>
    artist.name.toLowerCase().includes(q.toLowerCase())
);

const getById = handleGetById(artistModel);

const deleteById = handleDeleteById(artistModel);

const createArtist = async (req, res) => {
    try {
        const artist = await artistModel.createArtist(req.body);
        return res.status(201).json(artist);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}

const updateArtist = async (req, res) => {
    try {
        const artist = await artistModel.updateArtist(req.params.id, req.body);
        return res.status(200).json(artist);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}

module.exports = {
    getAll,
    getById,
    createArtist,
    deleteById,
    updateArtist
}