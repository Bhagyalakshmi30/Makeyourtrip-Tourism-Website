import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/about.jpg"

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
      </>

    );


}

export default About;
