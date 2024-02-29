import React from "react";
import AdminMenu from "../AdminMenu/AdminMenu";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <section className="services-section">
              <div className="auto-container">
                <div className="sec-title style-two">
                  <h2>Admin Dashboard</h2>
                  <div className="text">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution.
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>open for all</h5>
                      <h2>New Orders</h2>
                      <a href="#" className="read-more">
                        list of orders +
                      </a>
                      <div className="icon">
                        <span className="flaticon-power"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>open for leads</h5>
                      <h2>All orders</h2>
                      <a href="#" className="read-more">
                        list of orders +
                      </a>
                      <div className="icon">
                        <span className="flaticon-gearbox"></span>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>open for admins</h5>
                     <Link to="/admin/employees" > <h2>Employees</h2> </Link>
                      <a href="/admin/employees" className="read-more">
                        List of employees +
                      </a>
                      <div className="icon">
                        <span className="flaticon-brake-disc"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>Open for admins</h5>
                      <h2>Add Employee</h2>
                      <a href="#" className="read-more">
                        read more +
                      </a>
                      <div className="icon">
                        <span className="flaticon-car-engine"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>open for admin</h5>
                      <h2>Add Customers</h2>
                      <a href="#" className="read-more">
                        read more +
                      </a>
                      <div className="icon">
                        <span className="flaticon-tire"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>only admin</h5>
                      <Link to="/admin/customers" >  <h2>Customers</h2> </Link>
                      <a href="/admin/customers" className="read-more">
                        List of Customers +
                      </a>
                      <div className="icon">
                        <span className="flaticon-spray-gun"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>open for all</h5>
                     <Link to="/add/vehicle">  <h2>Add Vehicle</h2> </Link>
                      <a href="/add/vehicle" className="read-more">
                        List of Customers +
                      </a>
                      <div className="icon">
                        <span className="flaticon-spray-gun"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>only admin</h5>
                      <h2>Add Customer</h2>
                      <a href="#" className="read-more">
                        List of Customers +
                      </a>
                      <div className="icon">
                        <span className="flaticon-spray-gun"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 service-block-one">
                    <div className="inner-box hvr-float-shadow">
                      <h5>only admin</h5>
                      <h2>Services</h2>
                      <a href="#" className="read-more">
                        List of Customers +
                      </a>
                      <div className="icon">
                        <span className="flaticon-spray-gun"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
