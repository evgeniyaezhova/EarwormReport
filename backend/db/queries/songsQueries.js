const { db } = require('../index');

const getAllSongs = (req, res, next) => {
  db.any('SELECT * FROM songs')
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
  db.one('SELECT * FROM songs WHERE id=$1', [songId])
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
  getAllSongsForOneGenre,
  getAllSongsByOneUser,
  getSingleSong,
  createNewSong,
  deleteSingleSong
};
