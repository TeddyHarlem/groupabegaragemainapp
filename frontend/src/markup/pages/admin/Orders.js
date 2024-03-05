import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import OrderListForm from "../../components/Admin/OrderListForm/OrderListForm";

const Orders = () => {
  return (
    <div>
    <div className="container-fluid admin-pages">
     <div className="row">
       <div className="col-md-3 admin-left-side">
         <AdminMenu />
       </div>
       <div className="col-md-9 admin-right-side">
         < OrderListForm />
       </div>
     </div>
   </div>
 </div>
  );
}

export default Orders; 