const express = require('express');
const router = express.Router();

const {createUser, getUser, getUserById, deleteUser, updateUser} = require('../controllers/user');

router.get('/', getUser)
router.post('/', createUser)
router.put('/:iduser', updateUser)
router.delete('/:iduser', deleteUser)
router.get('/:iduser', getUserById)

module.exports = router;