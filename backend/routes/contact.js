const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const contactForm = req.body;
  // Logic to handle contact form submission
  res.status(201).json({ message: 'Contact form submitted', contactForm });
});

module.exports = router;