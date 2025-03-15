import { motion } from "framer-motion";
import Nav from "../Nav";
import Footer from "../Footer";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Resources from "../Resources";
import WhyChooseUs from "../WhyChooseUs";
import Profile from "../Profile";
import Blog from "../Blog";
import Contact from "../Contact";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HomePage() {
  return (
    <div className="backgroundImg">
      <Nav />
      <motion.div
        id="home"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Home />
      </motion.div>
      <motion.div
        id="aboutUs"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <AboutUs />
      </motion.div>
      <motion.div
        id="services"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Services />
      </motion.div>
      <motion.div
        id="whyChooseUs"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div
        id="profile"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Profile />
      </motion.div>
      <motion.div
        id="resources"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Resources />
      </motion.div>
      <motion.div
        id="blog"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Blog />
      </motion.div>
      <motion.div
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
      
      <Footer />
    </div>
  );
}

export default HomePage;
