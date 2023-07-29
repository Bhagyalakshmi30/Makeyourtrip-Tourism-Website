import Hero from "../components/hero";
import Navbar from "../components/navbar";
import heroimage from "../assests/home.jpg"
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroimage={heroimage}
                title="Your Journey  Your Story"
                text=" Choose your destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer/>
        </div>

    );


}

export default Home;