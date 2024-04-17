const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController');

// Route to get all veterinary stores
router.get('/', clinicController.getAllClinic);

// Route to create a new veterinary store
router.post('/', clinicController.createClinic);


module.exports = router;
