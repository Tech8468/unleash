import React from "react";
import { Link } from "react-router-dom";

// import Pix1 from "./img/doyinajayi.jpeg";

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
                <span className="title">
                  Self-Love or Self-Worship: What am I Doing?
                </span>
                <span className="author">Doyin Ajayi</span>
                <span className="date">Feb 28, 2025</span>
              </h1>
            </div>
            <div className="txt2">
              <p>
                Self-love is one of the most talked-about concepts today. People
                are encouraged to prioritize their well-being, embrace
                self-care, and set boundaries. While this is essential for a
                balanced life, there is a thin line between healthy self-love
                and self-worship — an extreme form of self-centeredness where
                personal desires, opinions, and emotions are placed above
                everything else.
              </p>
              <Link to="https://medium.com/@adedoyinhannah205/self-love-or-self-worship-what-am-i-doing-224db1634bf4">
                <p className="read">Read more </p>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div className="col1">
            <div className="txt1">
              <h1>
                <span className="title">
                  How to Pick The Right Partner for You
                </span>
                <span className="author">Doyin Ajayi</span>
                <span className="date">Feb 28, 2025</span>
              </h1>
            </div>
            <div className="txt2">
              <p>
                As a marriage counselor and a believer in Christ, I have seen
                how the decision of whom to marry shapes not just the lives of
                individuals but also their destiny, purpose, and service to God.
              </p>
              <Link to="https://medium.com/@adedoyinhannah205/how-to-pick-the-right-partner-for-you-7144d6cb09d1">
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
