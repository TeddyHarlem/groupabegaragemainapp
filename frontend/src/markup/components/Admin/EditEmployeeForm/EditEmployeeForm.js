import React, { useState, useEffect } from "react";
import EmployeeService from "../../../../services/employee.service";
// Import the useAuth hook
import { useAuth } from "../../../../Contexts/AuthContext";

function EditEmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    employee_first_name: "",
    employee_last_name: "",
    employee_phone: "",
    company_role_id: "",
    active_employee: 1,
  });

  const id = window.location.pathname.split("/")[3];

  // Errors
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [lastNameRequired, setLastNameRequired] = useState("");
  const [phoneNumberRequired, setPhoneNumberRequired] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [companyRoleIdRequired, setCompanyRoleIdRequired] = useState("");

  // Create a variable to hold the user's token
  let loggedInEmployeeToken = "";
  // Destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle  validation
    let valid = true; // Flag
    // First name is required
    if (!employeeData.employee_first_name) {
      setFirstNameRequired("First name is required.");
      valid = false;
    } else {
      setFirstNameRequired("");
    }

    if (!employeeData.employee_last_name) {
      setLastNameRequired("Last name is required");
      valid = false;
    } else {
      setLastNameRequired("");
    }

    if (!employeeData.employee_phone) {
      setPhoneNumberRequired("Phone number is required");
      valid = false;
    } else {
      setPhoneNumberRequired("");
    }

    // if the form is not valid, do Not submit
    if (!valid) {
      return;
    }

    if (!employeeData.company_role_id) {
      setCompanyRoleIdRequired("Comany role id required");
      valid = false;
    } else {
      setCompanyRoleIdRequired("");
    }

    // Send data to server
    const updateEmployee = EmployeeService.updateEmployee(
      employeeData,
      id,
      loggedInEmployeeToken
    );
    updateEmployee
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error);
          console.log(data.error);
        } else {
          // Handle successful response
          setSuccess(true);
          setServerError("");
          // Redirect to the employees page after 2 seconds
          // For now, just redirect to the home page
          setTimeout(() => {
            window.location.href = "/admin/employees";
          }, 2000);
        }
      })
      // Handle Catch
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  };

  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  console.log(singleEmployeeData);

  useEffect(() => {
    // console.log(id, "check id on console");
    const employee = EmployeeService.getEmployeeById(id, loggedInEmployeeToken);
    employee
      .then((response) => response.json())
      .then((data) => {
        setSingleEmployeeData(data.data);
        setEmployeeData({
          ...data.data[0],
          company_role_id: data.data[0]?.company_role_id,
        }); // Set company_role_id state
        console.log(data.data);
      });
  }, [id]);

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>
            Edit: {singleEmployeeData[0]?.employee_first_name}{" "}
            {singleEmployeeData[0]?.employee_last_name}
          </h2>
          <h4>Employee email: {singleEmployeeData[0]?.employee_email}</h4>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        onChange={handleChange}
                        value={employeeData.employee_first_name}
                        type="text"
                        name="employee_first_name"
                        placeholder="Employee first name"
                      />
                      <p>{firstNameRequired}</p>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        onChange={handleChange}
                        value={employeeData.employee_last_name}
                        type="text"
                        name="employee_last_name"
                        placeholder="Employee last name"
                        required
                      />
                      <p>{lastNameRequired}</p>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        onChange={handleChange}
                        value={employeeData.employee_phone}
                        type="text"
                        name="employee_phone"
                        placeholder="Employee phone"
                        required
                      />
                      <p>{phoneNumberRequired}</p>
                    </div>

                    <div className="form-group col-md-12">
                      <select
                        className="custom-select-box"
                        onChange={handleChange}
                        value={employeeData.company_role_id}

                        // onChange={handleChange}
                        // name="company_role_id"
                        // value={employeeData.company_role_id}
                      >
                        <option value="">Select role</option>
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                      <p>{companyRoleIdRequired}</p>
                    </div>

                    <div className="form-group col-md-12">
                      <label>
                        <input
                          checked={employeeData.active_employee === 1}
                          onChange={() =>
                            employeeData.active_employee === 1
                              ? setEmployeeData({
                                  ...employeeData,
                                  active_employee: 0,
                                })
                              : setEmployeeData({
                                  ...employeeData,
                                  active_employee: 1,
                                })
                          }
                          value={employeeData.active_employee}
                          type="checkbox"
                          name="active_employee"
                        />

                        <span> Is active employee </span>
                      </label>
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Update</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditEmployeeForm;
