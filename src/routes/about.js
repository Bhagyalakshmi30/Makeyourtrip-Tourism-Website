import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/about.jpg"
import Footer from "../components/footer";
import OfferedServices from "../components/offeredservices";
import Testimonials from "../components/testimonials";


function About() {

  return (
    <>

      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={abtimage}
        title="About"
        btnClass="hide"
      />
      <OfferedServices/>
      <Testimonials/>
      <Footer/>
      
    </>

  );


}

export default About;
