const express = require('express');
const router = express.Router();
const medicalOfficerController = require('../controllers/medicalOfficerController');
router.get('/', medicalOfficerController.get);
router.post('/register', medicalOfficerController.create);
router.put('/:_id', medicalOfficerController.update);
router.delete('/:_id', medicalOfficerController.delete);
// router.patch('/', medicalOfficerController.update);

module.exports = router;