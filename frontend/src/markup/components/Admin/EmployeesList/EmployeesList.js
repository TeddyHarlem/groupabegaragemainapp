// Import the necessary components
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns"; // To properly format the date on the table
import EmployeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Contexts/AuthContext";
import { FaEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

// Create the EmployeesList component
const EmployeesList = () => {
  // Create all the states we need to store employee's data
  const [employees, setEmployees] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { employee } = useAuth();
  let token = null; // To store the token
  if (employee) {
    token = employee.employee_token;
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  useEffect(() => {
    // Call the getAllEmployees function
    const allEmployees = EmployeeService.getAllEmployees(token);
    allEmployees
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
          setEmployees(data.data);
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
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>Employees</h2> 
                <ColoredLine color="red" />
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Active</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Role</th>
                    <th> Edit/Profile </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.employee_id}>
                      <td>{employee.active_employee === 1 ? "Yes" : "No"}</td>
                      <td>{employee.employee_first_name}</td>
                      <td>{employee.employee_last_name}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.employee_phone}</td>
                      <td>
                        {format(
                          new Date(employee.added_date),
                          "MM - dd - yyyy | kk:mm"
                        )}
                      </td>
                      <td>{employee.company_role_name}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <Link
                            to={`/admin/edit-employee/${employee.employee_id}`}
                          >
                            {" "}
                            <FaEdit /> Edit{" "}
                          </Link>
                          |
                          <Link
                            to={`/admin/employee-profile/${employee.employee_id}`}
                          >
                            {" "}
                            <CgProfile /> Profile{" "}
                          </Link>
                        </div>
                      </td>
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
export default EmployeesList;
