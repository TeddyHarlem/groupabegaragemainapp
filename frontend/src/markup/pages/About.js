import React from "react";

import BottomSchedule from "../components/BottomSchedule/BottomSchedule";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import BottomBanner from "../components/BottomBanner/BottomBanner";

function About() {
  return (
    <div>
      <section
        className="page-title"
        style={{ backgroundImage: "url(assets/images/background/bg-3.jpg)" }}
      >
        <div className="auto-container">
          <h2>About us</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>About us</li>
          </ul>
        </div>
      </section>

      <section className="about-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                <h2>
                  We are highly skilled mechanics <br /> for your car repair
                </h2>
                <div className="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information heading towards a
                    streamlined cloud solution. User generated content in
                    real-time will have multiple.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              image 440*352pxl
              <div className="image">
                <img src="assets/images/resource/image-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <WhyChooseUs />
      <BottomBanner />
      <BottomSchedule />
      
    </div>
  );
}

export default About;
