import React from "react";
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
// Import the AddCustomerForm component
import  EditEmployeeForm from "../../components/Admin/EditEmployeeForm/EditEmployeeForm.js";

function AddCustomer(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <EditEmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
