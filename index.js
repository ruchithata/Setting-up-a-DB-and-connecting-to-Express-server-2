require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
connectDB();

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the User Management API!');
});

// Import and use the user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));