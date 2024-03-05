// Import url from the env
const api_url = process.env.REACT_APP_API_URL;

// Function to check if a vehicle with the given serial number already exists
export const checkExistingVehicle = async (serialNumber) => {
  try {
    const response = await fetch(`/api/vehicle?serial_number=${serialNumber}`);
    const data = await response.json();
    return !!data; // Convert to boolean value
  } catch (error) {
    console.error("Error checking existing vehicle:", error);
    throw error;
  }
};

// Function to add new vehicles to the database
const addVehicle = async (customerData, customer_id, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(customerData),
  };
  console.log(requestOptions);
  const response = await fetch(
    `${api_url}/api/vehicle`,
    requestOptions
  );
  return response;
};

//Fetch single customer data
const getCustomerById = async (customer_id, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
  };
  const response = await fetch(
    `${api_url}/api/customer/${customer_id}`,

    requestOptions
  );
  console.log(response);
  return response;
};


const getSingleVehicle = async (customer_id, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
  };
  const response = await fetch(
    `${api_url}/api/vehicles/${customer_id}`,

    requestOptions
  );
  console.log(response);
  return response;
}


// Export all functions
export default {
  addVehicle,
  getCustomerById,
  getSingleVehicle
};
