const { db } = require('../index');

const getAllGenres = (req, res, next) => {
  db.any('SELECT * FROM genres')
    .then(genres => {
      res.status(200).json({
        status: "success!",
        genres: genres,
        message: "got all genres!"
      });
    })
    .catch(err => {
      return next(err)
    });
};


const createNewGenre = (req, res, next) => {
  db.none(
  'INSERT INTO genres (genre_name) VALUES (${genre_name})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "created a new genre"
      });
    })
    .catch(err => {
      next(err);
    })
};

module.exports = {
  getAllGenres,
  createNewGenre
};
