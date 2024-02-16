import React from "react";

import BottomSchedule from "../components/BottomSchedule/BottomSchedule";

function Contact() {
  return (
    <div>
      <section
        className="page-title"
        style={{ backgroundImage: "url(assets/images/background/bg-3.jpg)" }}
      >
        <div className="auto-container">
          <h2>Contact us</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>contact us</li>
          </ul>
        </div>
      </section>
      <section className="contact-section">
        <div className="auto-container">
          map-section
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* Contact Form */}
                <div className="contact-form"></div>
                {/* End Contact Form */}
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-5">
              <div className="inner-column">
                <h4>Our Address</h4>
                <div className="text">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service.
                </div>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    <span>Address:</span> 54B, Tailstoi Town 5238 MT, La city,
                    IA 5224
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>email:</span> contact@buildtruck.com
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <span>phone:</span> 1800 456 7890 / 1254 897 3654
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <BottomSchedule />
    </div>
  );
}

export default Contact;
