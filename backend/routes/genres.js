const express = require('express');
const router = express.Router();
const {getAllGenres, createNewGenre} = require('../db/queries/genresQueries.js')

router.get('/', getAllGenres);
router.post('/', createNewGenre);

module.exports = router;
