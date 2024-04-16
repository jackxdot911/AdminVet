const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialization: String,
  location: String,
  contact: String,
  phone: String,
  age: Number,
  picture: String, 
  place: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
