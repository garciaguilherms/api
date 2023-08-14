const express = require('express');
const router = express.Router();

router.get('/albums', (req, res) => {
    const offset = parseInt(req.query['page[offset]']) || 0;
    const size = parseInt(req.query['page[size]']) || 10;
    const filters = req.query.filter || {};

    const matchedAlbums = (album, filterName, filterValue) => {
        return album[filterName] === filterValue;
    }

    const filteredAlbums = albums.filter(album => {
        return Object.keys(filters).every(filterName => {
            return matchedAlbums(album, filterName, filters[filterName]);
        });
    });

    const paginatedAlbums = filteredAlbums.slice(offset, offset + size);

    res.status(200).json(paginatedAlbums);
});

router.post('/albums', (req, res) => {
    const album = req.body;
    albums.push(album);
    res.status(201).json(album);
})

module.exports = router;

