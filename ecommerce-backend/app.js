// app.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://root:root@cluster0.dtuo1xs.mongodb.net/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => {
  console.error('Database connection error:', error);
});