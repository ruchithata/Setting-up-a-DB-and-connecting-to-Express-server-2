const express = require('express');
const User = require('../schema');

const router = express.Router();

// POST API endpoint
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.validate();
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Validation error', details: err.message });
    } else {
      res.status(500).send({ message: 'Server error', details: err.message });
    }
  }
});

module.exports = router;
