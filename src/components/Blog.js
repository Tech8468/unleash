import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import Pix1 from "./img/doyinajayi.jpeg";

function Blog() {
  let settings ={
    dots: true,
    infinites: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },

      },

    ],
  };
  return (
    <div className="blog">
      <div className="container">
        <div className="section0">
          <h1>Blog!</h1>
        </div>
        <div className="section1">
          <Slider {...settings}>
          <div className="col1">
            {/* <div className="txtHd1"> */}
            <div className="txt1">
              <h1 className="title">
                Self-Love or Self-Worship: What am I Doing?
              </h1>
              <p className="author">Doyin Ajayi</p>
              <p className="date">Feb 28, 2025</p>
            </div>
            <div className="txt2">
              <p>
                Self-love is one of the most talked-about concepts today. People
                are encouraged to prioritize their well-being, embrace
                self-care, and set boundaries. 
              </p>
              <Link to="https://medium.com/@adedoyinhannah205/self-love-or-self-worship-what-am-i-doing-224db1634bf4">
                <p className="read">Read more </p>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div className="col1">
            <div className="txt1">
              <h1 className="title">How to Pick The Right Partner for You</h1>
              <p className="author">Doyin Ajayi</p>
              <p className="date">Feb 28, 2025</p>
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
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Blog;
