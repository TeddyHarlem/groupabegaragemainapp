// Import url from the env
const api_url = process.env.REACT_APP_API_URL;

// A function to send post request to create a new employee
const createEmployee = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/employee`, requestOptions);
  return response;
};

// A function to send get request to get all employees
const getAllEmployees = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  const response = await fetch(`${api_url}/api/employees`, requestOptions);
  return response;
};

async function getEmployeeById(id, loggedInEmployeeToken) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
  };
  const response = await fetch(`${api_url}/api/employee/${id}`,
    requestOptions
  );
  console.log(response);
  return response;
}

// Write a function to edit customer
const updateEmployee = async (formData, id, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(
    `${api_url}/api/employee/edit/${id}`,
    requestOptions
  );
  return response;
};


// Export all the functions
const employeeService = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee 
};
export default employeeService;
