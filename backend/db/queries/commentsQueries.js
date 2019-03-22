const { db } = require('../index');

const getAllComments = (req, res, next) => {
  db.any('SELECT comment_body, comments.song_id, username FROM comments JOIN users ON comments.user_id = users.id')
    .then(comments => {
      res.status(200).json({
        status: "success!",
        comments: comments,
        message: "got all comments!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getAllCommentsForOneSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.any('SELECT * FROM comments WHERE song_id=$1', [songId])
  .then(comments => {
    res.status(200)
    .json({
      status: "success",
      comments: comments,
      message: "got all comments for one song"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const createNewComment = (req, res, next) => {
req.body.user_id = parseInt(req.body.user_id);
req.body.song_id = parseInt(req.body.song_id);
  db.none(
  'INSERT INTO comments (comment_body, user_id, song_id) VALUES (${comment_body}, ${user_id}, ${song_id})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "created a new comment"
      });
    })
    .catch(err => {
      next(err);
    })
};

const editSingleComment = (req, res, next) => {
  db.none('UPDATE comments SET comment_body=${comment_body}, user_id=${user_id}, song_id=${song_id} WHERE id=${commentId}', {
    commentId: req.params.id,
    comment_body: req.body.comment_body,
    user_id: req.body.user_id,
    song_id: req.body.song_id
  })
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "edited one comment"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const deleteSingleComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id=$1', commentId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single comment"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllComments,
  getAllCommentsForOneSong,
  createNewComment,
  editSingleComment,
  deleteSingleComment
};
