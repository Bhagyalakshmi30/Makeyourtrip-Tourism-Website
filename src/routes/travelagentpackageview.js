import React from "react";
import Footer from "../components/footer";
import TravelAgentNavbar from "../components/travelagentnavbar";
import AgentPackageView from "../components/agentpackagesview";


function TravelAgentPackageView() {
    return (
        <div>
            {/* <TravelAgentNavbar/> */}
            
            <AgentPackageView/>
            <Footer/>
        </div>

    );


}

export default TravelAgentPackageView;