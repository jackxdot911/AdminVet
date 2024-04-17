const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  contact: String,
  services: [String], 
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const clinic = mongoose.model('Clinic', clinicSchema);

module.exports = clinic;
