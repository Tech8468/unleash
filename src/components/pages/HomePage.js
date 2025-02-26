import Nav from "../Nav";
import Footer from "../Footer";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Resources from "../Resources";

import WhyChooseUs from "../WhyChooseUs";
import Contact from "../Contact";

function HomePage() {
    return (
        <div className="backgroundImg">
            <Nav />
            <Home />
            <AboutUs />
            <Services />
            <WhyChooseUs />
            <Resources />
            <Contact />
            <Footer />
        </div>
    );
};
export default HomePage;