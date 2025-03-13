import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./img/unleash_logo.png";

function Nav() {
  const menuRef = useRef();

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleToggleMenu();
  };

  return (
    <div className="navbar" id="navbar">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <ul className="nav-menu" ref={menuRef}>
        <li className="nav-item">
          <a
            href="#home"
            className="nav-link"
            onClick={() => handleScroll("home")}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#aboutUs"
            className="nav-link"
            onClick={() => handleScroll("aboutUs")}
          >
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#whyChooseUs"
            className="nav-link"
            onClick={() => handleScroll("whyChooseUs")}
          >
            Why Choose Us?
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resources"
            className="nav-link"
            onClick={() => handleScroll("resources")}
          >
            Resources
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#footer"
            className="nav-link"
            onClick={() => handleScroll("footer")}
          >
            Contact Us
          </a>
        </li>
        <button className="nav-btn nav-close-btn" onClick={handleToggleMenu}>
          <FaTimes />
        </button>
      </ul>
      <button className="nav-btn" onClick={handleToggleMenu}>
        <FaBars />
      </button>
    </div>
  );
}

export default Nav;
