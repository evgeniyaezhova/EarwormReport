const { db } = require('../index');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(users => {
      res.status(200).json({
        status: "success!",
        users: users,
        message: "got all users!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
  .then(user => {
    res.status(200)
    .json({
      status: "success",
      user: user,
      message: "got one user"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const createNewUser = (req, res, next) => {
  db.none(
  'INSERT INTO users (username) VALUES (${username})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "created a new user"
      });
    })
    .catch(err => {
      next(err);
    })
};

const deleteSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single user"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createNewUser,
  deleteSingleUser
};
