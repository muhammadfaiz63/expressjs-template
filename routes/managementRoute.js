const express = require('express');
const router = express.Router();
const managementControler = require('../controllers/managementController');
router.get('/', managementControler.get);
router.post('/register', managementControler.create);
// router.put('/:_id', managementControler.update);
// router.patch('/', managementControler.update);
// router.delete('/:_id', managementControler.delete);

module.exports = router;