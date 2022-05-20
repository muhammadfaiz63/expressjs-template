const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
router.get('/', usersController.get);
router.post('/register', usersController.create);
router.put('/:_id', usersController.update);
router.patch('/', usersController.update);
router.delete('/:_id', usersController.delete);

module.exports = router;