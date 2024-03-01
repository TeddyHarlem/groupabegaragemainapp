import React from "react";

import EditEmployeeProfileForm from "../../../../components/Admin/EditEmployeeProfileForm/EditEmployeeProfileForm.js";
import AdminMenu from "../../../../components/Admin/AdminMenu/AdminMenu.js";
// Import the AddCustomerForm component

function EditEmployeeProfile(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu/>
          </div>
          <div className="col-md-9 admin-right-side">
            <EditEmployeeProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployeeProfile;
