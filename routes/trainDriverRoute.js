const express = require('express');
const router = express.Router();
const trainDriverControler = require('../controllers/trainDriverController');
router.get('/', trainDriverControler.get);
router.post('/register', trainDriverControler.create);
router.put('/:_id', trainDriverControler.update);
router.delete('/:_id', trainDriverControler.delete);
// router.patch('/', trainDriverControler.update);

module.exports = router;