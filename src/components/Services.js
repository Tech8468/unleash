import React from "react";
// import { Link } from "react-router-dom";

import Pix1 from "./img/couples-3.png";


function Services() {
  return (
    <div className="services">
      <div className="section0">
        <h1>Services!</h1>
      </div>
      <div className="section1">
        <div className="col1">
          {/* <div className="txtHd1"> */}
            <div className="txt1">
              <h1>Individual Counseling</h1>
              <p>Personalized sessions for emotional and mental well-being.</p>
            </div>
            <div className="txt2">
              <h1>Couples Therapy</h1>
              <p>
              Strengthening relationships and communication.
              </p>
            </div>
            <div className="txt3">
              <h1>Family Counseling</h1>
              <p>Building harmony and understanding within families.</p>
            </div>
            <div className="txt4">
              <h1>Group Coaching</h1>
              <p>
              Collaborative sessions to foster growth and support.
              </p>
            </div>
            <div className="txt5">
              <h1>Workshops & Seminars</h1>
              <p>Engaging programs on various topics related to mental health, self-discovery, and personal development.</p>
            </div>
          {/* </div> */}
        </div>
        <div className="col2">
        <img src={Pix1} alt="" className="Img-1" />

        </div>
      </div>
    </div>
  );
}
export default Services;
