const connection = require('./connection');
const createError = require('../createError');

const getAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM songs', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
};

const getById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM songs WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM songs WHERE id = ?', [id], (error, results) => {
            if (error) {
                const err = createError(500, 'Internal Server Error', error);
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

const createSong = (song) => {
    const query = 'INSERT INTO songs(title, duration, genre, album_id, artist_id) VALUES(?, ?, ?, ?, ?)';
    const values = [song.title, song.duration, song.genre, song.album_id, song.artist_id];
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
            if (error) {
                const err = createError(500, 'Internal Server Error', error);
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

const updateSong = (id, song) => {
    const query = 'UPDATE songs SET title = ?, duration = ?, genre = ?, album_id = ?, artist_id = ? WHERE id = ?';
    const values = [song.title, song.duration, song.genre, song.album_id, song.artist_id, id];
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
            if (error) {
                const err = createError(500, 'Internal Server Error', error);
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

module.exports = {
    getAll,
    getById,
    deleteById,
    createSong,
    updateSong
}