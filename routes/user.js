const express = require('express');
const router = express.Router();

const {createUser, getUser, getUserById, deleteUser, updateUser} = require('../controllers/user');
const { middlewareCreateUser } = require('../middlewares/Validators');

router.get('/', getUser)
router.post('/', middlewareCreateUser(), createUser)
router.put('/:iduser', updateUser)
router.delete('/:iduser', deleteUser)
router.get('/:iduser', getUserById)

module.exports = router;