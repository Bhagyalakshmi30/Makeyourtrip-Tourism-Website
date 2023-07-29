import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/services.jpg"


function Service() {
    return (
        <div>
                  
        <>
           <Navbar />
            <Hero
             cName="hero-mid"
             heroimage={abtimage}
             title="Service"
             btnClass="hide"
            />
      </>
        </div>

    );


}

export default Service;