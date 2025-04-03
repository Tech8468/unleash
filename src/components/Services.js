import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Link } from "react-router-dom";

import Pix1 from "./img/mental-therapy.jpg";
import Pix2 from "./img/marriage-family-therapy.jpg";
import Pix3 from "./img/substance-use-therapy.jpg";
import Pix4 from "./img/black-girl-therapy.jpg";
import Pix5 from "./img/black-man-presented-engagement-ring-his-girlfriend-restaurant.jpg";
import Pix6 from "./img/people-office-work-day.jpg";
import Pix7 from "./img/workplace-wellness.jpg";

function Services() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   // speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 10000,
  //   slidesToShow: 2,
  //   slidesToScroll: 1
  // };


  return (
    <div className="services">
      <div className="container">
        <div className="section0">
          <h1>Our Services at Unleash Coaching & Counseling!</h1>
        </div>
        <div className="section1">
          {/* <div className="row1">
            <p>Our Services at Unleash Coaching & Counseling</p>
          </div> */}
          <div className="row2">
            {/* <Slider {...settings}> */}
              
              <div className="col">
                <div className="box">
                  <img src={Pix1} alt="" className="Img-1" />
                  <h2>Mental Health & Emotional Wellness Counseling</h2>
                  <p>
                    Supporting individuals struggling with anxiety, depression,
                    trauma, and other mental health challenges through therapy
                    that fosters healing and personal development.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix2} alt="" className="Img-1" />
                  <h2>Marriage & Family Therapy</h2>
                  <p>
                    Helping couples and families strengthen their relationships,
                    improve communication, and resolve conflicts in a healthy,
                    lasting way.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix3} alt="" className="Img-1" />
                  <h2>Substance Use Disorder Therapy </h2>
                  <p>
                    Providing specialized counseling for individuals struggling
                    with substance use and addiction.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix4} alt="" className="Img-1" />
                  <h2>Adolescent & Teen Therapy </h2>
                  <p>
                    Guiding young people through the challenges of adolescence,
                    including self-esteem issues, peer pressure, academic
                    stress, and emotional well-being.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix5} alt="" className="Img-1" />
                  <h2>Premarital & Relationship Coaching </h2>
                  <p>
                    Equipping singles and couples with the tools to build
                    strong, fulfilling relationships and make informed choices
                    about love and commitment.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix6} alt="" className="Img-1" />
                  <h2>Group Therapy & Support Programs</h2>
                  <p>
                    Providing a safe and supportive space for individuals to
                    share experiences, gain insights, and receive guidance from
                    both peers and professionals.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src={Pix7} alt="" className="Img-1" />
                  <h2>Corporate & Workplace Wellness Programs</h2>
                  <p>
                    Helping organizations promote employee mental health, stress
                    management, and work-life balance through tailored
                    counseling and coaching sessions.
                  </p>
                </div>
              </div>
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
