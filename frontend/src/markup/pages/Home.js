import React from "react";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";

import BottomBanner from "../components/BottomBanner/BottomBanner";
import BottomSchedule from "../components/BottomSchedule/BottomSchedule";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";

function Home() {
  return (
    <div>
      <section className="video-section">
        <div
          data-parallax={{ y: 50 }}
          className="sec-bg"
          style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}
        ></div>
        <div className="auto-container">
          <h5>Drinking Beso since the 1970s</h5>
          <h2>
            We make the Beso <br />
            on the go
          </h2>
          <div className="video-box">
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                className="overlay-link lightbox-image video-fancybox ripple"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
            <div className="text">
              Watch the art of <br />
              beso making
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <ServicesSection />

    

      <section className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-container">
                <h2>
                  Quality Service And <br />
                  Customer Satisfaction !!
                </h2>
                <div className="text">
                  We utilize the most recent symptomatic gear to ensure your
                  vehicle is fixed or adjusted appropriately and in an opportune
                  manner. We are an individual from Professional Auto Service, a
                  first class execution arrange, where free assistance offices
                  share shared objectives of being world-class car
                  administration focuses.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    <WhyChooseUs />

      <BottomBanner />
      <BottomSchedule />
    </div>
  );
}

export default Home;
