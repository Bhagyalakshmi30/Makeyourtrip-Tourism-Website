import React from "react";

import Hero from "../components/hero";

import heroimage from "../assests/home.jpg"
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";
import TravelAgentNavbar from "../components/travelagentnavbar";


function TravelAgentHome() {
    return (
        <div>
            <TravelAgentNavbar/>
            
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

export default TravelAgentHome;