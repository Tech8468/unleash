import React from "react";
import { Link } from "react-router-dom";

import Pix1 from "./img/Book-3.jpeg";
import Pix2 from "./img/Book-2.jpeg";
import Pix3 from "./img/Book-1.jpeg";

function Resources() {
  return (
    <div className="resources">
      {/* <div className="container"></div> */}
      <div className="section1">
        <div className="section0">
          <h1>Resources!</h1>
        </div>
        <div className="col1">
          {/* <div className="txtHd1"> */}
          <div className="grid1">
            <img src={Pix1} alt="" className="Img-1" />
            <p>Bestseller</p>
            <Link to="">
              <button>Order</button>
            </Link>
          </div>
          <div className="grid2">
            <img src={Pix2} alt="" className="Img-1" />
            <p>Coming Soon</p>
            <Link to="">
              <button>Pre-order</button>
            </Link>
          </div>
          <div className="grid3">
            <img src={Pix3} alt="" className="Img-1" />
            <p>Coming Soon</p>
            <Link to="">
              <button>Pre-order</button>
            </Link>
          </div>

          {/* </div> */}
        </div>
        {/* <div className="col2"></div> */}
      </div>
    </div>
  );
}
export default Resources;
