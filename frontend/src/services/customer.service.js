// Import url from the env 
const api_url = process.env.REACT_APP_API_URL;

// A function to send a post request to create a new customer 
const createCustomer = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/customer`, requestOptions);
  return response;
}

// A function to send get request to get all customers
const getAllCustomers = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  };
  const response = await fetch(`${api_url}/api/customers`, requestOptions);
  return response;
}

// write a function to search by first name, last name, email and ID
async function searchCustomer(token, searchQuery) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  };
  const response = await fetch(`${api_url}/api/customer/search/${searchQuery}`, requestOptions);
  return response;
}

//Fetch single customer data
async function getCustomerById(id, loggedInEmployeeToken){
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    }
  };
  const response = await fetch(`${api_url}/api/customer/${id}`, requestOptions);
  return response;
}






// Export all the functions 
const CustomerService = {
  createCustomer,
  getAllCustomers,
  searchCustomer,
  getCustomerById
};

export  default CustomerService;