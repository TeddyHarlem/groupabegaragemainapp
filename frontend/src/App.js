// Import react
import React from "react";
// Import the Routes and Route components from react-router
import { Routes, Route } from "react-router";
// Import the page components
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from "./markup/pages/admin/AddEmployee";
import AddCustomer from "./markup/pages/admin/AddCustomer";
import Customers from "./markup/pages/admin/Customers";
import Unauthorized from "./markup/pages/Unauthorized";

// Import the Orders and components
import Orders from "./markup/pages/admin/Orders";
import NewOrder from "./markup/pages/admin/NewOrder";

// Import the Employees component
import Employees from "./markup/pages/admin/Employees";
// import adnin components
import AdminDashboard from "./markup/components/Admin/AdminDashboard/AdminDashboard";

// Import the css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file
import "./assets/styles/custom.css";

// Import the Header component
import Header from "./markup/components/Header/Header";
// Import the Footer component
import Footer from "./markup/components/Footer/Footer";
// Import the About component
import About from "./markup/pages/About";
// Import the Services component
import Services from "./markup/pages/Services";
// Import the Contact component
import Contact from "./markup/pages/Contact";

// Import the PrivateAuthRoute component
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import AdminServices from "./markup/pages/admin/AdminServices";
import EditCustomerForm from "./markup/components/Admin/EditCustomerForm/EditCustomerForm";
import EditEmployeeForm from "./markup/components/Admin/EditEmployeeForm/EditEmployeeForm";
import AddVehicle from "./markup/pages/admin/AddVehicle";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/admin/edit-customer/:customer_id" element={<EditCustomerForm />} />
        <Route path="/edit/employee" element={<EditEmployeeForm />} />
        <Route path="/add/vehicle" element={<AddVehicle />} />

        {/* // Add the Orders Routes  */}
        <Route
          path="/admin/order"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <NewOrder />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />

        {/* // Add the Customers Routes  */}

        <Route
          path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AddCustomer />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />

        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<Employees />} />

        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        {/* admin dashboard route  */}
        <Route
          path="/admin"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AdminDashboard />
            </PrivateAuthRoute>
          }
        />
        {/* 
          Customers (/admin/customers) - managers and admins
          Orders (/admin/orders) - Can be accessed by all employees
          Add employee (/admin/add-employee) - admins only 
            - Admin: 3 
            - Manager: 2 
            - Employee: 1 
        */}

        <Route
          path="/admin/services"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AdminServices />
            </PrivateAuthRoute>
          }
        />
      </Routes>
      {/* admin srvivese route */}

      <Footer />
    </>
  );
}

export default App;
