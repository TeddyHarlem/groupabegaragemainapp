import React from "react";

import { FaEdit } from "react-icons/fa";

function AddSingleVehcle() {
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
              <p>Active customer: isActive</p>
              <p>
                Edit customer info: <FaEdit />
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
                              placeholder="Vehicle year"
                            />
                          </div>
                          {/* Additional vehicle input fields go here */}
                          <div className="form-group col-md-12">
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span>Add Vehicle</span>
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

export default AddSingleVehcle;
