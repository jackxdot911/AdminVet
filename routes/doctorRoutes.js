const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/alive',doctorController.keepAlive);

router.get('/', doctorController.getAllDoctors);
router.post('/', doctorController.createDoctor);
router.delete('/:id', doctorController.deleteDoctor);
router.put('/:id', doctorController.updateDoctor);

router.get('/:id', doctorController.getDoctorById);

module.exports = router;
