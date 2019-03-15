const express = require('express');
const router = express.Router();
const {getAllUsers, getSingleUser, createNewUser, deleteSingleUser} = require('../db/queries/usersQueries.js')

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createNewUser);
router.delete('/:id', deleteSingleUser);


module.exports = router;
