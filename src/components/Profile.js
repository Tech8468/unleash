import React from "react";
// import { Link } from "react-router-dom";

import Pix1 from "./img/da-4.png";

function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="section0">
          <h1>Professional Profile!</h1>
        </div>
        <div className="section1">
          <div className="col1">
            {/* <div className="txtHd1"> */}

            <div className="txt2">
              <p>
                A certified Marriage and Family Therapist, Cognitive Behavioral
                Therapist, and Adolescent and Teens Therapist. She is the
                founder of Unleash Coaching and Counseling, where she provides
                expert guidance on relationships, mental health, and personal
                growth.
              </p>
              <p>
                As the visionary behind Highflyer Charity Foundation, she leads
                rehabilitation and empowerment initiatives for marginalized
                individuals. She also serves as the Lead Pastor of Souls for
                Christ Outreach Ministry (SOFCOM), inspiring faith, purpose, and
                transformation.
              </p>
              <p>
                Through counseling, speaking engagements, and authorship, she
                equips individuals and families with the tools to thrive.
              </p>
            </div>
            {/* </div> */}
          </div>
          {/* <div className="name">
            <h1>Doyin Ajayi</h1>
          </div> */}
          <div className="col2">
          <h1 className="name">Doyin Ajayi</h1>
            <img src={Pix1} alt="" className="Img-1" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
