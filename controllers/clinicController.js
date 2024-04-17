const Clinic = require('../models/clinicModel');

// Controller function to get all veterinary stores
const getAllClinic = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.json(clinics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new veterinary store
const createClinic = async (req, res) => {
  const { name, location, contact, services } = req.body;

  try {
    const newClinic = new Clinic({
      name,
      location,
      contact,
      services
    });

    const savedClinic = await newClinic.save();
    res.status(201).json(savedClinic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
  getAllClinic,
  createClinic
};
