import React from "react";
// import { Link } from "react-router-dom";

import Pix1 from "./img/counsel-photo.jpg";

// import Pix4 from "./img/Rectangle-36.png";
// import Pix5 from "./img/why-choose-v1-shape2 1.png";

function WhyChooseUs() {
  return (
    <div className="whyChooseUs">
      <div className="container">
      <div className="section1">
        <div className="col1">
          <img src={Pix1} alt="" className="Img-1" />
        </div>
        <div className="col2">
          {/* <div className="tab2"> */}
          <div className="txtHd">
            <h1>Why Choose Us?</h1>
          </div>
          <div className="txtHd1">
            <div className="txt1">
              <h1>Professional Expertise</h1>
              <p>
                Our team consists of certified and experienced therapists,
                counselors, and coaches dedicated to helping you unlock your
                full potential.
              </p>
            </div>
            <div className="txt2">
              <h1>Tailored Approaches</h1>
              <p>
                We recognize that every individual’s journey is unique. Our
                strategies are customized to meet your personal needs and goals.
              </p>
            </div>

            <div className="txt3">
              <h1>Safe & Confidential Environment</h1>
              <p>
                Your privacy is our priority. We provide a secure,
                non-judgmental space for open and honest dialogue.
              </p>
            </div>
            <div className="txt4">
              <h1>Holistic Growth & Transformation</h1>
              <p>
                We go beyond traditional counseling by integrating emotional,
                mental, and spiritual well-being into our approach.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      </div>
    </div>
  );
}
export default WhyChooseUs;
