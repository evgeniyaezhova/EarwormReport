const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/earworm');

// just changing here to correspond to my new db name - it's how I avoid a million similar-named dbs in my Postgres server

// while I'm here, queries look great! :)

module.exports = { db };
