// Import the express module
const express = require('express');
// call the router method from express to create the router
const router = express.Router();
// Import the vehicle controller
const vehicleController = require('../controllers/vehicle.controller')
// Create a route to handle the add vehicle request on post 
router.post('/api/vehicle', vehicleController.addVehicle);
// create a route that handles to get single vehicle by customer_id
router.get('/api/vehicles/:customer_id', vehicleController.getVehiclesByCustomerId)
// export the router
module.exports = router;
