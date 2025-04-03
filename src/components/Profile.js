import React from "react";
// import { Link } from "react-router-dom";

import Pix1 from "./img/da-31.png";

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
              <p>Welcome to Unleash Coaching and Counseling!</p>
              <p>
                I am Doyin Ajayi, a Certified Marriage and Family Therapist,
                With a deep passion for emotional wellness and personal growth,
                I founded this platform to help individuals, couples, and
                families overcome challenges, build healthier relationships, and
                lead fulfilling lives.
              </p>
              <p>
                At Unleash Coaching and Counseling, I provide a safe,
                non-judgmental space where you can explore your emotions, gain
                clarity, and develop the tools needed to navigate life’s
                complexities. My approach integrates evidence-based therapy
                techniques, faith-based principles, and practical coaching
                strategies, ensuring that each session is tailored to your
                unique needs.
              </p>
              <p>
                Whether you’re dealing with personal struggles, navigating
                relationship challenges, or overcoming substance use issues, I
                am here to support and equip you with the confidence,
                resilience, and strategies to heal, grow, and thrive.
              </p>
              <p>Let’s work together to unleash your full potential!</p>
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
