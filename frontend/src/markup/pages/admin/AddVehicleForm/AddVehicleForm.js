import React, { useState } from "react";
// Import react-icons
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddVehicleForm() {
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
              <p>Email</p>
              <p>Phone Number:</p>
              <p>Active customer:Yes</p>
              <p>
                Edit customer info:
                <Link to="/admin/edit-customer/:customer_id">
                  {" "}
                  <FaEdit />{" "}
                </Link>{" "}
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
                              name="Vihicle year"
                              placeholder="Vehicle year"
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle make"
                              placeholder="Vehicle make"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle model"
                              placeholder="Vehicle model"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle type"
                              placeholder="Vehicle type"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle mileage"
                              placeholder="Vehicle mileage"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle tag"
                              placeholder="Vehicle tag"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle serial"
                              placeholder="Vehicle serial"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="Vehicle color"
                              placeholder="Vehicle color"
                              required
                            />
                          </div>

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

export default AddVehicleForm;

// import React, { useState } from "react";

// function AddVehicleForm() {
//   const [vehicleInfo, setVehicleInfo] = useState({
//     vehicleYear: "",
//     vehicleMake: "",
//     vehicleModel: "",
//     vehicleType: "",
//     vehicleMileage: "",
//     vehicleTag: "",
//     vehicleSerial: "",
//     vehicleColor: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicleInfo({
//       ...vehicleInfo,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call your API to insert vehicle info into the database
//     console.log("Vehicle Info:", vehicleInfo);
//     // Reset the form after submission if needed
//     setVehicleInfo({
//       vehicleYear: "",
//       vehicleMake: "",
//       vehicleModel: "",
//       vehicleType: "",
//       vehicleMileage: "",
//       vehicleTag: "",
//       vehicleSerial: "",
//       vehicleColor: ""
//     });
//   };

//   return (
//     <section className="history-section">
//       <div className="history-block">
//         <div className="content"></div>
//       </div>
//       <div className="auto-container">
//         <div className="history-block">
//           <div className="years">Cars</div>
//           <div className="content">
//             <h5>
//               <b>Add New Vehicle</b>
//             </h5>
//             <div className="auto-container">
//               <div className="row clearfix">
//                 <div className="form-column col-lg-7">
//                   <div className="inner-column">
//                     <div className="contact-form">
//                       <form onSubmit={handleSubmit}>
//                         <div className="row clearfix">
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleYear"
//                               value={vehicleInfo.vehicleYear}
//                               onChange={handleChange}
//                               placeholder="Vehicle year"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleMake"
//                               value={vehicleInfo.vehicleMake}
//                               onChange={handleChange}
//                               placeholder="Vehicle make"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleModel"
//                               value={vehicleInfo.vehicleModel}
//                               onChange={handleChange}
//                               placeholder="Vehicle model"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleType"
//                               value={vehicleInfo.vehicleType}
//                               onChange={handleChange}
//                               placeholder="Vehicle type"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleMileage"
//                               value={vehicleInfo.vehicleMileage}
//                               onChange={handleChange}
//                               placeholder="Vehicle mileage"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleTag"
//                               value={vehicleInfo.vehicleTag}
//                               onChange={handleChange}
//                               placeholder="Vehicle tag"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleSerial"
//                               value={vehicleInfo.vehicleSerial}
//                               onChange={handleChange}
//                               placeholder="Vehicle serial"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleColor"
//                               value={vehicleInfo.vehicleColor}
//                               onChange={handleChange}
//                               placeholder="Vehicle color"
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <button
//                               className="theme-btn btn-style-one"
//                               type="submit"
//                               data-loading-text="Please wait..."
//                             >
//                               <span>Add Vehicle</span>
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddVehicleForm;
