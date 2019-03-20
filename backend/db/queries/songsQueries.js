const { db } = require('../index');

const getAllSongs = (req, res, next) => {

  db.any('SELECT songs.id AS songId, title, img_url, COUNT(favorites.song_id) AS favoritesCount, username, genres.genre_name AS genre, genres.id AS genreId FROM songs JOIN favorites ON songs.id = favorites.song_id JOIN users ON songs.user_id = users.id JOIN genres ON songs.genre_id = genres.id GROUP BY songId, title, img_url, username, genreId ORDER BY songs.id DESC')
    .then(songs => {
      res.status(200).json({
        status: "success!",
        songs: songs,
        message: "got all songs!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getAllSongsByPop = (req, res, next) => {
  db.any('SELECT songs.id AS songId, title, img_url, COUNT(favorites.song_id) AS favoritesCount, username FROM songs JOIN favorites ON songs.id = favorites.song_id JOIN users ON songs.user_id = users.id GROUP BY songId, title, img_url, username ORDER BY favoritesCount DESC')
    .then(songs => {
      res.status(200).json({
        status: "success!",
        songs: songs,
        message: "got all songs!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getAllSongsForOneGenre = (req, res, next) => {
  let genreId = parseInt(req.params.id);
  db.any('SELECT * FROM songs WHERE genre_id=$1', [genreId])
  .then(songs => {
    res.status(200)
    .json({
      status: "success",
      songs: songs,
      message: "got all songs for one genre"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getAllSongsByOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM songs WHERE user_id=$1', [userId])
  .then(songs => {
    res.status(200)
    .json({
      status: "success",
      songs: songs,
      message: "got all songs by one user"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getSingleSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.one('SELECT title, img_url, username, COUNT(song_id) FROM songs JOIN users ON songs.user_id = users.id JOIN favorites ON songs.id = favorites.song_id WHERE songs.id=$1', [songId])
  .then(song => {
    res.status(200)
    .json({
      status: "success",
      song: song,
      message: "got single song"
    });
  })
  .catch(err => {
    return next(err)
  })
};


const createNewSong = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.genre_id = parseInt(req.body.genre_id);
  db.none(
  'INSERT INTO songs (title, img_url, user_id, genre_id) VALUES (${title}, ${img_url}, ${user_id}, ${genre_id})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "created a new song"
      });
    })
    .catch(err => {
      next(err);
    })
};

const deleteSingleSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.result('DELETE FROM songs WHERE id=$1', songId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single song"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllSongs,
  getAllSongsByPop,
  getAllSongsForOneGenre,
  getAllSongsByOneUser,
  getSingleSong,
  createNewSong,
  deleteSingleSong
};
