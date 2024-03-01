import React from "react";
// Import the AdminMenu component

// Import the AddCustomerForm component

import AdminMenu from "../../../../components/Admin/AdminMenu/AdminMenu.js";
import EditCustomerForm from "../../../../components/Admin/EditCustomerForm/EditCustomerForm.js";

function EditCustomer(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <EditCustomerForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
