// import the express module
const express = require('express');
// call the router method of the express module
const router = express.Router();
// import the customer controller
const customerController = require('../controllers/customer.controller');
// Import middleweare
const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add customer request on post 
router.post('/api/customer',
// [authMiddleware.verifyToken, authMiddleware.isAdmin],
 customerController.createCustomer);
// Create  a route to handle the get all customers request on get
router.get('/api/customers',
// [authMiddleware.verifyToken, authMiddleware.isAdmin], 
customerController.getAllCustomers);
// create a route to handle single customer
router.get("/api/customer/:id", customerController.getCustomerById);
// update customer by id
router.put('/api/customer/edit/:customer_id',
// [authMiddleware.verifyToken, authMiddleware.isAdmin] ,
customerController.updateCustomer);
// search a route  for searching customer by name or email
router.get('/api/customer/search/:search', customerController.searchCustomer);
// Export the router
module.exports = router;

