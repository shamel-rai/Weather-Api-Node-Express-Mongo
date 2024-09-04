const express = require('express');
const { fetchWeather } = require('../controller/weatherController');

const router = express.Router();


router.route('/fetch').get(fetchWeather);


module.exports = router;