const connection = require('./connection');

const getAll = async() => {
    const albums = await connection.execute('SELECT * FROM albums');
};

module.exports = {
    getAll
}