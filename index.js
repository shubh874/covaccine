const express = require('express');
const callVaccApi = require('./service/vaccApi');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 75, // limit each IP to 75 requests per windowMs
  message:
    'Too many accounts created from this IP, please try again after 5 minutes',
});

//  apply to all requests
app.use(limiter);
app.use(express.json());

app.get('/findbypin', cors(), async (req, res) => {
  try {
    const { pin, date } = req.query;
    const response = await callVaccApi(pin, date);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('covac_client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'covac_client/build', 'index.html'));
  });
}

app.listen(process.env.PORT, () => {
  console.log('server is running on port ' + process.env.PORT);
});
