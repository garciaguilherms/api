const connection = require('./connection'); 

const getAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artists', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artists WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const createArtist = (artist) => {
    const query = 'INSERT INTO artists(name, genre, birth_year, awards, hometown) VALUES(?, ?, ?, ?, ?)';
    const values = [artist.name, artist.genre, artist.birth_year, artist.awards, artist.hometown];
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
        connection.query('DELETE FROM artists WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}

const updateArtist = (id, artist) => {
    const query = 'UPDATE artists SET name = ?, genre = ?, birth_year = ?, awards = ?, hometown = ? WHERE id = ?';
    const values = [artist.name, artist.genre, artist.birth_year, artist.awards, artist.hometown, id];
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

module.exports = {
    getAll,
    getById,
    createArtist,
    deleteById,
    updateArtist
}