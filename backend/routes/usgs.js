const express = require('express');
const router = express.Router();
const { startCronJobs, getEarthquakes } = require('../controllers/usgsController');

// Expose the route for getEarthquakes
router.get('/getEarthquakes', getEarthquakes);

module.exports = router;
