import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/contact.jpg"

function Contact() {
    return (
        <div>
            
            <>
      
      <Navbar />
            <Hero
             cName="hero-mid"
             heroimage={abtimage}
             title="Contact Us"
             btnClass="hide"
            />
      </>

        </div>

    );


}

export default Contact;