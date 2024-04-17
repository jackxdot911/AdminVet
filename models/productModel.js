const mongoose = require('mongoose');

const veterinaryProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  mg: Number,
  animal: {
    type: String,
    required: true
  },
  diseases: [String],
  maxDose: {
    type: String,
    required: true
  },
  prescriptionNeeded: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: Date,
  manufactureDate: Date,
  minQuantity: {
    type: Number,
    default: 1
  }
});

const VeterinaryProduct = mongoose.model('VeterinaryProduct', veterinaryProductSchema);

module.exports = VeterinaryProduct;
