const { json } = require("express");
const customerService = require("../services/customer.service");

// Add customer controller
async function createCustomer(req, res, next) {
  // console.log(req.headers); 
  // Check if customer email already exists in the database 
  const customerExists = await customerService.checkIfCustomerExists(req.body.customer_email);
  // If customer exists, send a response to the client
  if (customerExists) {
    res.status(400).json({
      error: "This email address is already associated with another customer!"
    });
  } else {
    
    try {
      const customerData = req.body;
      // Create the customer
      const customer = await customerService.createCustomer(customerData);
      if (!customer) {
        res.status(400).json({
          error: "Failed to add the customer!"
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Something went wrong!"
      });
    }
  }
}





// Get all customers
async function getAllCustomers(req, res, next) {
  try {
    const customers = await customerService.getAllCustomers();

    if (!customers) {
      return res.status(400).json({ message: "Failed to fetch all customers" });
    } else {
      return res.status(200).json({
        status: "success",
        data: customers,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Get single customer by id
async function getCustomerById(req, res, next) {
  try {
    const customerId = req.params.id;
    const customer = await customerService.getCustomerById(customerId);

    if (!customer) {
      return res.status(400).json({ message: "Failed to get customer" });
    } else {
      return res.status(200).json({ status: true, data: customer });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Update customer info
async function updateCustomer(req, res, next) {
  try {
    const customerData = req.body;
    const customer = await customerService.updateCustomer(customerData);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found or failed to update" });
    } else {
      return res.status(200).json({ message: "Customer info updated successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error: " + error.message });
  }
}


// Search customer
async function searchCustomer(req, res, next) {
  try {
    const customerData = req.params.search;
    const customer = await customerService.searchCustomer(customerData);

    if (!customer) {
      return res.status(404).json({ message: "No customers found!" });
    } else {
      return res.status(200).json({ message: "Customers Found!", data: customer });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  searchCustomer,
};
