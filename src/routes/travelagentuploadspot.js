import React from "react";

import TravelAgentNavbar from "../components/travelagentnavbar";

import PostRestaurant from "../components/postrestaurants"
import PostSpot from "../components/postspots";


function TravelAgentUploadSpots() {
    return (
        <div>
            <TravelAgentNavbar/>
            
            <PostSpot/>
        </div>

    );


}

export default TravelAgentUploadSpots;