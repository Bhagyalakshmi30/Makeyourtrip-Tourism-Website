import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/about.jpg"
import Footer from "../components/footer";

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
       <Footer/>
    </>

  );


}

export default About;
