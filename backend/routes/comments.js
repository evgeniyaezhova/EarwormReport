const express = require('express');
const router = express.Router();
const {
  getAllComments,
  getAllCommentsForOneSong,
  createNewComment,
  editSingleComment,
  deleteSingleComment
} = require('../db/queries/commentsQueries.js')

router.get('/', getAllComments);
router.get('/song/:id', getAllCommentsForOneSong);
router.post('/', createNewComment);
router.patch('/:id', editSingleComment);
router.delete('/:id', deleteSingleComment);

module.exports = router;
