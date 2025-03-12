import "./App.css";
import "./css/Navbar.css";
import "./css/Home.css";
import "./css/Services.css";
import "./css/Contact.css";
import "./css/AboutUs.css";
import "./css/WhyChooseUs.css";
import "./css/Resources.css";
import "./css/Footer.css";
import "./css/Profile.css";
import "./css/Blog.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
// import AboutPage from "./components/pages/AboutPage";
// import ContactPage from "./components/pages/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
