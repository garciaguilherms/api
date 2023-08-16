const createError = require('../createError');
const albumModel = require('../models/album');
const { handleGetAll, handleGetById, handleDeleteById} = require('../utils');

const getById = handleGetById(albumModel);

const deleteById = handleDeleteById(albumModel);

const getAll = handleGetAll(albumModel, q => album =>
    album.album_name.toLowerCase().includes(q.toLowerCase())
);
const createAlbum = async (req, res) => {
    try {
        const album = await albumModel.createAlbum(req.body);
        return res.status(201).json(album);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}
const updateAlbum = async (req, res) => {
    try {
        const album = await albumModel.updateAlbum(req.params.id, req.body);
        return res.status(200).json(album);
    } catch (error) {
        const err = createError(500, 'Internal Server Error', error.sqlMessage);
        return res.status(500).json(err);
    }
}

module.exports = {
    getAll,
    getById,
    createAlbum,
    updateAlbum,
    deleteById
};
