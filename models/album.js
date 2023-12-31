const connection = require('./connection');

const getAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM albums', (error, results) => {
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
        connection.query('SELECT * FROM albums WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const createAlbum = (album) => {
    const query = 'INSERT INTO albums(artist_id, album_name, release_year, number_of_songs, record_label, genre) VALUES(?, ?, ?, ?, ?, ?)';
    const values = [album.artist_id, album.album_name, album.release_year, album.number_of_songs, album.record_label, album.genre];
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const updateAlbum = (id, album) => {
    const query = 'UPDATE albums SET artist_id = ?, album_name = ?, release_year = ?, number_of_songs = ?, record_label = ?, genre = ? WHERE id = ?';
    const values = [album.artist_id, album.album_name, album.release_year, album.number_of_songs, album.record_label, album.genre, id];
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
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
        connection.query('DELETE FROM albums WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

module.exports = {
    getAll,
    getById,
    createAlbum,
    updateAlbum,
    deleteById
}