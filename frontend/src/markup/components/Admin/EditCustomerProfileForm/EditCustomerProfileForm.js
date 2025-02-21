import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import AddVehicleForm from "../AddVehicleForm/AddVehicleForm";

function EditCustomerProfileForm() {
  return (
    <section className="history-section">
      <div className="history-block">
        <div className="content"></div>
      </div>
      <div className="auto-container">
        <div className="history-block">
          <div className="years">info</div>
          <div className="content">
            <h4>Customer: customerName</h4>
            <div className="text">
              <p>Email: customerEmail</p>
              <p>Phone Number: customerPhoneNumber</p>
              <p>Active customer: Yes</p>
              <p>
                Edit customer info:{" "}
                <Link to="#">
                  {" "}
                  <FaEdit />{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="history-block">
          <div className="years">Cars</div>
          <div className="content">
            <h5>
              <b>Vehicles of customerName</b>
            </h5>

            <div className="auto-container">
              <div className="csearch"></div>
              <div className="row clearfix">
                <div className="form-column col-lg-7">
                  <div className="inner-column">
                    <div className="contact-form">
                      <form>
                        <div className="row clearfix">
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle year"
                              placeholder="No vehicle found"
                            />
                          </div>
                          <div>{/* <AddVehicleForm /> */}</div>

                          {/* Additional vehicle input fields go here */}
                          <div className="form-group col-md-12">
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <Link to="/add/vehicle">
                                {" "}
                                <span>Add Vehicle</span>{" "}
                              </Link>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="history-block">
          <div className="years">Orders</div>
          <div className="content">
            <h4>Orders of customerName</h4>
            <div className="text">Orders will be displayed here</div>
          </div>
        </div>
        <div className="history-block">
          <div className="content"></div>
        </div>
      </div>
    </section>
  );
}

export default EditCustomerProfileForm;
