import React from "react";
import { Link } from "react-router-dom";

import Pix1 from "./img/Book-3.jpeg";
import Pix2 from "./img/Book-1.jpeg";
import Pix3 from "./img/Book-2.jpeg";
import Pix4 from "./img/selar-logo.png";
import Pix5 from "./img/White-Amazon-Logo.png";

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
            <div className="btns">
            <Link to="/">
              <button><img src={Pix4} alt="" className="selar" /></button>
            </Link>
            <Link to="/">
              <button><img src={Pix5} alt="" className="selar2"/></button>
            </Link>
            </div>
          </div>
          <div className="grid2">
          <img src={Pix2} alt="" className="Img-1" />
            
            <p>Now Out</p>
            <div className="btns">
            <Link to="https://selar.com/7920zf">
              <button><img src={Pix4} alt="" className="selar" /></button>
            </Link>
            <Link to="https://www.amazon.com/dp/B0F4NF2NGZ">
              <button><img src={Pix5} alt="" className="selar2"/></button>
            </Link>
            </div>
          </div>
          <div className="grid3">
          <img src={Pix3} alt="" className="Img-1" />
            <p>Now Out</p>
            <div className="btns">
            <Link to="/">
              <button><img src={Pix4} alt="" className="selar" /></button>
            </Link>
            <Link to="https://www.amazon.com/dp/B0F4XNM7DL">
              <button><img src={Pix5} alt="" className="selar2"/></button>
            </Link>
            </div>
          </div>

          {/* </div> */}
        </div>
        {/* <div className="col2"></div> */}
      </div>
    </div>
  );
}
export default Resources;
