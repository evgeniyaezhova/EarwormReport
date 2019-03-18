const { db } = require('../index');

const getAllFavorites = (req, res, next) => {
  db.any('SELECT * FROM favorites')
  .then(favorites => {
    res.status(200).json({
      status: "success!",
      favorites: favorites,
      message: "got all favorites!"
    });
  })
  .catch(err => {
    return next(err)
  });
};

const getAllFavoritesForOneSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.any('SELECT COUNT(id) FROM favorites WHERE song_id=$1', [songId])
  .then(favorites => {
    res.status(200)
    .json({
      status: "success",
      favorites: favorites,
      message: "got all favorites for one song"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getAllFavoritesForOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM favorites WHERE user_id=$1', [userId])
  .then(favorites => {
    res.status(200)
    .json({
      status: "success",
      favorites: favorites,
      message: "got all favorites for one user"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const createNewFavorite = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.song_id = parseInt(req.body.song_id);
  db.none(
  'INSERT INTO favorites (user_id, song_id) VALUES (${user_id}, ${song_id})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "created a new favorite"
      });
    })
    .catch(err => {
      next(err);
    })
};

const deleteSingleFavorite = (req, res, next) => {
  let favoriteId = parseInt(req.params.id);
  db.result('DELETE FROM favorites WHERE id=$1', favoriteId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single favorite"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllFavorites,
  getAllFavoritesForOneSong,
  getAllFavoritesForOneUser,
  createNewFavorite,
  deleteSingleFavorite
};
