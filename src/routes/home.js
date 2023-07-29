import Hero from "../components/hero";
import Navbar from "../components/navbar";
import heroimage from "../assests/home.jpg"

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
             url ="/"
             btnClass="show"
            />
        </div>

    );


}

export default Home;