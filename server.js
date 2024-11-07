const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');

const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// MongoDB connection (use your MongoDB URI here if you're using MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/blogs', blogRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
