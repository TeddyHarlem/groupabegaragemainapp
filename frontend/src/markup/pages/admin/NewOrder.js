import React from 'react';
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import NewOrderForm from '../../components/Admin/NewOrderForm/NewOrderForm';

function NewOrder() {
  return (
    <div>
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <NewOrderForm />
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewOrder
