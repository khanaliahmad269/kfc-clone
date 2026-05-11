const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const contactRoutes = require('./routes/contact');

app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/contact', contactRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});