// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// // Import the crypto module fromnode_modules
// const crypto = require("crypto");
const crypto = require("crypto-js"); // Import crypto-js

// Function to generate customer hash
function generateCustomerHash(customer) {
  const customerData = JSON.stringify(customer);
  const hash = crypto.SHA256(customerData).toString(); // Generate SHA256 hash
  return hash;
}

// // Function to generate customer hash
// function generateCustomerHash(customer) {
//   const customerData = JSON.stringify(customer);
//   const hash = crypto.createHash("sha256");
//   hash.update(customerData);
//   return hash.digest("hex");
// }

async function checkIfCustomerExists(email) {
  const query = "SELECT * FROM customer_identifier WHERE customer_email = ? ";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}
// A function to create a new customer
async function createCustomer(customer) {
  let createdCustomer = {};
  try {
    // Generate customer hash
    const customerHash = generateCustomerHash(customer);
    // insert customer details into customer_identifier
    const query =
      "INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_hash) VALUES (?, ?, ?)";
    const rows = await conn.query(query, [
      customer.customer_email,
      customer.customer_phone_number,
      customerHash,
    ]);
    console.log(rows);
    if (rows.affectedRows !== 1) {
      return false;
    }

    // Get the auto generated customer_id
    const customer_id = rows.insertId;
    //  const active_customer = 1
    // Insert customer detail into customer_info
    const query2 =
      "INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer) VALUES (?, ?, ?, ?)";
    const rows2 = await conn.query(query2, [
      customer_id,
      customer.customer_first_name,
      customer.customer_last_name,
      customer.active_customer,
      // active_customer
    ]);

    // Return the created customer's id
    createdCustomer = {
      customer_id: customer_id,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
  return createdCustomer;
}
// Get all customers
async function getAllCustomers(customers) {
  const query = "SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id ORDER by customer_identifier.customer_id DESC LIMIT 10";
  const rows = await conn.query(query)
  return rows;
}
// Get single customer
async function getCustomerById(customerId) {
  const query = "SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id WHERE customer_identifier.customer_id = ?";
  const rows = await conn.query(query, [customerId]);
  return rows;
}
//Update customer 
async function updateCustomer(customer) { 
   // update active customer status
   const query1 = "UPDATE customer_identifier SET customer_phone_number = ? WHERE customer_id = ?"
   await  conn.query(query1, [customer.customer_phone_number, customer.customer_id]);

  const query2 = "UPDATE customer_info SET customer_first_name = ?, customer_last_name = ?, active_customer = ? WHERE customer_id = ?";
   await conn.query(query2, [customer.customer_first_name, customer.customer_last_name, customer.active_customer, customer.customer_id])
 
   return  'Updated Successfully';
   // return true
  
}
// Search customer by email, first name, last name phone number, customer id, customer status 
async function searchCustomer(customerSearch){
  const query = "SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id WHERE customer_identifier.customer_email LIKE ? OR customer_identifier.customer_phone_number LIKE ? OR customer_info.customer_first_name LIKE ?  OR customer_info.customer_last_name LIKE ? OR customer_identifier.customer_id LIKE ? OR customer_info.active_customer LIKE ?";
  const search = `%${customerSearch}%`;
  const rows = await conn.query(query, [search, search, search, search, search, search]);
  return rows;
}
  
module.exports = {
  checkIfCustomerExists,
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  searchCustomer
};
