const Doctor = require('../models/doctorModel');

// Controller function to get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch doctors', error: err.message });
  }
};

// Controller function to create a new doctor
const createDoctor = async (req, res) => {
  const { name, specialization, location, contact, picture , email, phone, age, place } = req.body;

  try {
    const newDoctor = new Doctor({
      name,
      specialization,
      location,
      picture,
      contact,
      email,
      phone,
      age,
      place
    });

    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create doctor', error: err.message });
  }
};

// Controller function to delete a doctor by ID
const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully', doctor: deletedDoctor });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete doctor', error: err.message });
  }
};

// Controller function to update a doctor by ID
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update doctor', error: err.message });
  }
};

// Controller function to get a doctor by ID
const getDoctorById = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch doctor', error: err.message });
  }
};

const keepAlive = (req,res) => {
  res.status(200).json({status : "working"});
}


module.exports = {
  getAllDoctors,
  createDoctor,
  deleteDoctor,
  updateDoctor,
  getDoctorById,
  keepAlive
};
