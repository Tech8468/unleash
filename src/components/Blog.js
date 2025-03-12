import React from "react";
import { Link } from "react-router-dom";

import Pix1 from "./img/doyinajayi.jpeg";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="section0">
          <h1>Blog!</h1>
        </div>
        <div className="section1">
          <div className="col1">
            {/* <div className="txtHd1"> */}
            <div className="txt1">
              <h1>
              <span className="title">Title 1</span>
              <span className="author">Author: Jayi Doyin</span>
                <span className="date">Date: 25th January, 2021</span>
                
              </h1>
            </div>
            <div className="txt2">
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/" >
                <p className="read">Read more </p>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div className="col1">
            <div className="txt1">
              <h1>
                <span className="title">Title 1</span>
                <span className="author">Author: Jayi Doyin</span>
                <span className="date">Date: 25th January, 2021</span>
                
              </h1>
            </div>
            <div className="txt2">
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/" >
                <p className="read">Read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
