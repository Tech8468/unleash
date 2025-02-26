import { Link } from "react-router-dom";
import Logo from "./img/unleash_logo.png";
import Pix1 from "./img/instagram-svgrepo-com.png";
import Pix2 from "./img/facebook-svgrepo-com.png";
import Pix3 from "./img/linkedin-svgrepo-com.png";
import { PiCopyright } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";


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
        <div className="footer-link">
          <ul>
            <Link to="/about">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Services</li>
            </Link>
            <Link to="/contact">
              <li>Why Choose Us?</li>
            </Link>
            <Link to="/contact">
              <li>Resources</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footerSocial">
        <Link to="/">
            <img src={Pix1} alt="" />
          </Link>
          <Link to="/">
            <img src={Pix2} alt="" />
          </Link>
          <Link to="/">
            <img src={Pix3} alt="" />
          </Link>
          <Link to="/">
          <PiWhatsappLogoLight className="whatsApp"/>
          </Link>
        </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copy">
        <p>Copyright <PiCopyright className="cpy"/> 2025 Unleash Coaching & counseling. All rights reserved. Design by Tech8468</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
