// Import the necessary components
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns"; // To properly format the date on the table
import EmployeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Contexts/AuthContext";
import { FaEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import vehicleService from "../../../../services/vehicle.service";

// Create the EmployeesList component
const VehicleListForm = ({ customer_id }) => {
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  let token = null; // To store the token
  // if (employee) {
  //   token = employee.employee_token;
  // }

  const [vehicleList, setVehicleList] = useState([]); // To store the list

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  useEffect(() => {
    // Call the getAllEmployees function
    const vehicleList = vehicleService.getSingleVehicle(customer_id, token);
    vehicleList
      .then((res) => {
        if (!res.ok) {
          setApiError(true);
          if (res.status === 401) {
            setApiErrorMessage("Please login again");
          } else if (res.status === 403) {
            setApiErrorMessage("You are not authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
        }
        return res.json();
      })
      .then((data) => {
        if (data.data.length !== 0) {
          setVehicleList(data.data);
          console.log(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              {/* <h2>{apiErrorMessage}</h2> */}
              <h2>No vehicle found</h2>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
            <ColoredLine color="red" />
              <div className="contact-title">
                {/* <h2>Vehicles</h2> */}
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vehicle Id</th>
                    <th>Vehicle year</th>
                    <th>Vehicle make</th>
                    <th>Vehicle model</th>
                    <th>Vehicle type</th>
                    <th>Vehicle mileage</th>
                    <th>Vehicle tag</th>
                    <th>Vehicle serial</th>
                    <th>Vehicle color</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleList.map((vehicle) => (
                    <tr key={vehicle.vehicle_id}>
                      <td>{vehicle.vehicle_id}</td>
                      <td>{vehicle.vehicle_year}</td>
                      <td>{vehicle.vehicle_make}</td>
                      <td>{vehicle.vehicle_model}</td>
                      <td>{vehicle.vehicle_type}</td>
                      <td>{vehicle.vehicle_mileage}</td>
                      <td>{vehicle.vehicle_tag}</td>
                      <td>{vehicle.vehicle_serial}</td>
                      <td>{vehicle.vehicle_color}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <ColoredLine color="red" />
          </section>
        </>
      )}
    </>
  );
};

// Export the EmployeesList component
export default VehicleListForm;
