// Import url from the env 
const api_url = process.env.REACT_APP_API_URL;


// Function to add a new vehicle
export const addVehicle = async (vehicleData) => {
  try {
    const response = await fetch('/api/vehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vehicleData)
    });

    if (!response.ok) {
      throw new Error('Failed to add vehicle');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding vehicle:', error);
    throw error;
  }
};

// Function to check if a vehicle with the given serial number already exists
export const checkExistingVehicle = async (serialNumber) => {
  try {
    const response = await fetch(`/api/vehicle?serial_number=${serialNumber}`);
    const data = await response.json();
    return !!data; // Convert to boolean value
  } catch (error) {
    console.error('Error checking existing vehicle:', error);
    throw error;
  }
};
