const {Client} = require ('pg');

const client = new Client('postgres://localhost:5432/quickbeam');

module.exports = {
    client,
}