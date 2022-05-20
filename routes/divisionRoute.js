const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');
router.get('/', divisionController.get);
router.post('/register', divisionController.create);
router.put('/:_id', divisionController.update);
router.delete('/:_id', divisionController.delete);

module.exports = router;