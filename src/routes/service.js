import Navbar from "../components/navbar";
import Hero from "../components/hero";
import abtimage from "../assests/services.jpg"
import Footer from "../components/footer";
import OfferedServices from "../components/offeredservices";
import PackageMain from "../components/packagemain";
import PackagesAvailable from "../components/packagesAvailable";



function Service() {
    return (
        <div>

            <>
                <Navbar />
                {/* <Hero
                    cName="hero-mid"
                    heroimage={abtimage}
                    title="Service"
                    btnClass="hide"
                /> */}
                <PackageMain/>
                <PackagesAvailable/>
                 <Footer/>
                 
            </>
        </div>

    );


}

export default Service;