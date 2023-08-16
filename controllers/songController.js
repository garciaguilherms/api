const createError = require('../createError');
const songModel = require('../models/song');
const { handleGetAll, handleGetById, handleDeleteById } = require('../utils');

const getAll = handleGetAll(songModel, q => song => 
    song.name.toLowerCase().includes(q.toLowerCase())
);

const getById = handleGetById(songModel);

const deleteById = handleDeleteById(songModel);

const createSong = async (req, res) => {
    try {
        const song = await songModel.createSong(req.body);
        return res.status(201).json(song);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}

const updateSong = async (req, res) => {
    try {
        const song = await songModel.updateSong(req.params.id, req.body);
        return res.status(200).json(song);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}

module.exports = {
    getAll,
    getById,
    createSong,
    deleteById, 
    updateSong
}