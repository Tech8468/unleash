import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import Pix1 from "./img/doyinajayi.jpeg";

function Blog() {
  let settings = {
    dots: true,
    infinites: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
              <div className="txt1">
                <h1 className="title">
                  5 Things You Must Know as a Christian Wife
                </h1>
                <p className="author">Doyin Ajayi</p>
                <p className="date">Feb 28, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  As a marriage counselor, I have seen countless wives struggle
                  with balancing their roles, expectations, and emotions in
                  marriage.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/5-things-you-must-know-as-a-christian-wife-e7e0f8bde6d6">
                  <p className="read">Read more </p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">How to Pick The Right Partner for You</h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Feb 28, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Marriage is not just a romantic union. It is a covenant and a
                  life-long journey that requires wisdom, understanding, and
                  divine guidance.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/how-to-pick-the-right-partner-for-you-7144d6cb09d1">
                  <p className="read">Read more </p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Self-Love or Self-Worship: What am I Doing?
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Feb 28, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Self-love is one of the most talked-about concepts today.
                  People are encouraged to prioritize their well-being, embrace
                  self-care, and set boundaries.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/self-love-or-self-worship-what-am-i-doing-224db1634bf4">
                  <p className="read">Read more </p>
                </Link>
              </div>
            </div>

            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Closure: Finding Peace and Moving Forward
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Mar 22, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Life is full of beginnings and endings. Whether it’s a
                  relationship, a friendship, a job, or even a phase of life,
                  there comes a time when we must say goodbye.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/closure-finding-peace-and-moving-forward-0996654a8637">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Fear or Faith: A Choice We All Must Make
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Mar 22, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Life often presents us with two choices — fear or faith. The
                  way we respond to situations reveals which one we are
                  embracing…
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/fear-or-faith-a-choice-we-all-must-make-b44c88dab2c6">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Closure in Marriage: Finding Peace After a Broken Union
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Mar 22, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Marriage is meant to be a lifelong journey, but sometimes, it
                  takes an unexpected turn.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/closure-in-marriage-finding-peace-after-a-broken-union-e2e032e55db4">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Love and Generosity: Balancing Giving and Receiving in
                  Marriage
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Apr 1, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  In a world that often emphasizes self-interest, choosing to be
                  a giver in marriage is a powerful and selfless act.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/love-and-generosity-balancing-giving-and-receiving-in-marriage-f1caa50594aa">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  How to Handle a Spouse Who Avoids Difficult Conversations
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Apr 1, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  Communication is one of the most critical pillars of a healthy
                  marriage, yet many couples struggle with it — especially when
                  it comes to difficult conversations.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/how-to-handle-a-spouse-who-avoids-difficult-conversations-dd050c530e73">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  Balancing Ministry, Marriage, and Career: How to Avoid
                  Neglecting Your Spouse
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Apr 1, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  As someone who is a minister, a wife, a mother, and a
                  professional, I understand what it feels like to navigate the
                  demands of multiple responsibilities.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/balancing-ministry-marriage-and-career-how-to-avoid-neglecting-your-spouse-d30ea67c7712">
                  <p className="read">Read more</p>
                </Link>
              </div>
            </div>
            <div className="col1">
              <div className="txt1">
                <h1 className="title">
                  How to Set Relationship Goals That Align With Your Life
                  Purpose
                </h1>
                <p className="author">Adedoyin Ajayi</p>
                <p className="date">Apr 2, 2025</p>
              </div>
              <div className="txt2">
                <p>
                  I have seen many individuals enter relationships without a
                  clear sense of direction.
                </p>
                <Link to="https://medium.com/@adedoyinhannah205/how-to-set-relationship-goals-that-align-with-your-life-purpose-d71012a7690e">
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
