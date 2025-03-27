import React from "react";
import Pix1 from "./img/INFIDELITY-&-TRUST-ISSUES (1).jpg";


function Program() {
  return (
    <div className="program">
      <div className="container">
        <div className="section1">
          <div className="row1">
            <h1>Upcoming Program</h1>
          </div>
          <div className="row2">
            <div className="col1">
            <img src={Pix1} alt="" className="Img-1" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Program;
