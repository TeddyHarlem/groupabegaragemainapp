import React, { useEffect, useState } from "react";
import CustomerService from "../../../../services/customer.service";
// Import the useAuth hook
import { useAuth } from "../../../../Contexts/AuthContext";

function EditCustomerForm() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const [customerData, setCustomerData] = useState({
    customer_first_name: "",
    customer_last_name: "",
    customer_phone_number:""
    });
    const id = window.location.pathname.split("/")[3];

     // Errors 
  const [firstNameRequired, setFirstNameRequired] = useState('');
  const [lastNameRequired, setLastNameRequired] = useState('');
  const [phoneNumberRequired, setPhoneNumberRequired] = useState('');
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  // Create a variable to hold the user's token
  let loggedInEmployeeToken = "";
  // Destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }
 const handleChange = ((e) => {
  setCustomerData ({...customerData, [e.target.name]:e.target.value})
  
      
 })

 const handleSubmit = async  (event) => {
  event.preventDefault();
  // Handle client side validations  
  let valid = true; // Flag 
  // First name is required 
  if (!customerData.customer_first_name) {
    setFirstNameRequired('First name is required');
    valid = false;
  } else {
    setFirstNameRequired('');
  } 

    
    
    if (!customerData.customer_last_name) {
      setLastNameRequired('last name is required');
      valid = false;
    } else {
      setLastNameRequired('');
    }

     
    if (!customerData.customer_phone_number) {
      setPhoneNumberRequired('Phone number is required');
      valid = false;
    } else {
      setPhoneNumberRequired('');
    }
     // If the form is not valid, do not submit 
     if (!valid) {
        return;
}
// Send data to server
const updateCustomer = CustomerService.updateCustomer(customerData, id, loggedInEmployeeToken);
    updateCustomer.then((response) => response.json())
      .then((data) => {
        console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error)
          console.log(data.error)
        } else {
          // Handle successful response 
          setSuccess(true);
          setServerError('')
          // Redirect to the employees page after 2 seconds 
          // For now, just redirect to the home page 
          setTimeout(() => {
            // window.location.href = '/admin/employees';
            window.location.href = '/admin/customers';
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
  }

 

  const [singleCustomerData, setSingleCustomerData] = useState({});
   console.log(singleCustomerData)
   
   useEffect(() => {
  
    // console.log(id, "check id on console");
    const customer = CustomerService.getCustomerById(id, loggedInEmployeeToken);
    customer.then(response => response.json()).then((data) => {
      setSingleCustomerData(data.data);
      setCustomerData(data.data[0])
      console.log(data.data)
    })

  }, [id]);

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit : {singleCustomerData[0]?.customer_first_name} {singleCustomerData[0]?.customer_last_name}</h2>
          
          <h4>Customer E-mail: {singleCustomerData[0]?.customer_email}</h4>
          
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input onChange={handleChange} value={customerData.customer_first_name}
                        type="text"
                        name="customer_first_name" 
                        placeholder="customer first name"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input onChange={handleChange} value={customerData.customer_last_name}
                        type="text"
                        name="customer_last_name"
                        placeholder="Customer last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input 
                        type="text"
                        name="customer_phone_number" onChange={handleChange} value={customerData.customer_phone_number}
                        placeholder="Employee phone (555-555-5555)"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label>
                        <input type="checkbox" name="is_active" />{" "}
                        <span> Is active customer </span>
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
