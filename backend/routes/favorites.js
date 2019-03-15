const express = require('express');
const router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesForOneSong,
  getAllFavoritesForOneUser,
  createNewFavorite,
  deleteSingleFavorite
} = require('../db/queries/favoritesQueries.js')

router.get('/', getAllFavorites);
router.get('/song/:id', getAllFavoritesForOneSong);
router.get('/user/:id', getAllFavoritesForOneUser);
router.post('/', createNewFavorite);
router.delete('/:id', deleteSingleFavorite);

module.exports = router;
