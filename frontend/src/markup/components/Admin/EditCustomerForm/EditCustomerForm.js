import React, { useEffect, useState } from "react";
import CustomerService from "../../../../services/customer.service";
// Import the useAuth hook 
import { useAuth } from "../../../../Contexts/AuthContext";

function EditCustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  
  // Create a variable to hold the user's token
  let loggedInEmployeeToken = '';
  // Destructure the auth hook and get the token 
  const { employee } = useAuth(); 
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [singleCustomerData, setSingleCustomerData] = useState([]);
  
  useEffect(() => {
    const id = window.location.pathname.split("/")[3];
    // console.log(id);
    const customer = CustomerService.getCustomerById(id, loggedInEmployeeToken)
    customer.then((data) => {
      setSingleCustomerData(data);
      console.log(data)
    } )
  }, [loggedInEmployeeToken]);


  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit: Customer Information</h2>
          <h4>Customer email:</h4>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_first_name"
                        placeholder="customer first name"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_last_name"
                        placeholder="Customer last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        placeholder="Employee phone (555-555-5555)"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                  <label>
                    <input
                      type="checkbox"
                      name="is_active"
                      
                    /> <span> Is active customer </span>
                   
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

export default EditCustomerForm;
