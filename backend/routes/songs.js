const express = require('express');
const router = express.Router();
const {
  getAllSongs,
  getAllSongsByPop,
  getAllSongsFavorites,
  getAllSongsForOneGenre,
  getAllSongsByOneUser,
  getSingleSong,
  createNewSong,
  deleteSingleSong
} = require('../db/queries/songsQueries.js')

router.get('/', getAllSongs);
router.get('/bypop', getAllSongsByPop);
router.get('/favs', getAllSongsFavorites);
router.get('/genre/:id', getAllSongsForOneGenre);
router.get('/user/:id', getAllSongsByOneUser);
router.get('/:id', getSingleSong);
router.post('/', createNewSong);
router.delete('/:id', deleteSingleSong);

module.exports = router;
