import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/contact.jpg"
import Footer from "../components/footer";
import ContactForm from "../components/contactform";

function Contact() {
    return (
        <div>

            <>

                <Navbar />
                <Hero
                    cName="hero"
                    heroimage={abtimage}
                    title="Contact Us"
                    text=" Get In Touch With Us"
                    buttonText="Click to contact"
                    url="/contactform"
                    btnClass="show"


                    
                />
                <ContactForm />
                <Footer />
            </>

        </div>

    );


}

export default Contact;