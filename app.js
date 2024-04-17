const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const doctorRoutes = require('./routes/doctorRoutes');
const clinicRoutes = require('./routes/clinicRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jackxdotedge:0xjI1WRHxgjo0HwT@cluster0.mpvqznv.mongodb.net/doctor-api?retryWrites=true&w=majority')
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/api/v1/doctors/', doctorRoutes);
app.use('/api/v1/clinics/', clinicRoutes);
app.use('/api/v1/products/', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
