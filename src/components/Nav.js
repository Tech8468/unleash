import { Link } from "react-router-dom";
import Logo from "./img/unleash_logo.png";

import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const menuRef = useRef();

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  // const handleToggleMenu = () => {
  //   const menu = document.querySelector(".nav-menu");
  //   menu.classList.toggle("show-menu");

  //   const hamburger = document.querySelector(".hamburger-menu");
  //   hamburger.classList.toggle("open");

  //   const navLinks = document.querySelectorAll(".nav-item");
  //   navLinks.forEach((link) => link.classList.toggle("show"));
  //   const links = document.querySelectorAll(".nav-link");
  //   links.forEach((link) => link.addEventListener("click", handleToggleMenu));
  //   links.forEach((link) => link.removeEventListener("click", handleToggleMenu));
  //   document.addEventListener("click", handleToggleMenu);
  //   document.removeEventListener("click", handleToggleMenu);

  // };

  console.log(handleToggleMenu);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ul className="nav-menu" ref={menuRef}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Why Choose Us?
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Resources
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Contact Us
          </Link>
        </li>
        {/* <button className="nav-btn nav-close-btn" onClick={handleToggleMenu}>
          <FaTimes />
        </button> */}
      </ul>
      {/* <button className="nav-btn" onClick={handleToggleMenu}>
        <FaBars />
      </button> */}
      {/* <div className="hamburger-menu" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}
    </div>
  );
}
export default Nav;
