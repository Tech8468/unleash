import { Link } from "react-router-dom";
import Logo from "./img/unleash_logo.png";
// import Pix1 from "./img/instagram-svgrepo-com.png";
// import Pix2 from "./img/facebook-svgrepo-com.png";
// import Pix3 from "./img/linkedin-svgrepo-com.png";
import { PiCopyright } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-board">
        <div className="col1">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="col2">
          {/* <div className="footer-item">
            <ul>
              <Link to="/" className="footer-link">
                <li>Home</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>About Us</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Services</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Why Choose Us?</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Profile</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Resources</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Blog</li>
              </Link>
              <Link to="/" className="footer-link">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div> */}
          <div className="footerSocial">
            <Link to="https://www.instagram.com/unlea.shcoachingcounselling?igsh=MThvOWJtZWVndnV0Zg%3D%3D&utm_source=qr">
              <FaInstagram className="instagram" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61567378949133&mibextid=ZbWKwL">
              <RiFacebookCircleLine className="facebook" />
            </Link>
            <Link to="/">
              <TiSocialLinkedinCircular className="linkedin" />
            </Link>
            <Link to="https://wa.me/2348065542118">
              <PiWhatsappLogoLight className="whatsApp" />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copy">
          <p>
            Copyright <PiCopyright className="cpy" /> 2025 Unleash Coaching &
            Counseling. All rights reserved. Designed & Developed by Techit
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
