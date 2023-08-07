import React from "react";

import TravelAgentNavbar from "../components/travelagentnavbar";

import PostRestaurant from "../components/postrestaurants"
import PostSpot from "../components/postspots";
import AgentOnlyPackage from "../components/agentonlypackage";


function TravelAgentViewPackage() {
    return (
        <div>
            <TravelAgentNavbar/>

            <AgentOnlyPackage/>
            
           
        </div>

    );


}

export default TravelAgentViewPackage;