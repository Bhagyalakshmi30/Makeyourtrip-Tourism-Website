import React from "react";
import Footer from "../components/footer";
import TravelAgentNavbar from "../components/travelagentnavbar";
import AgentPackageView from "../components/agentpackagesview";
import TravelAgentPackage from "../components/travelagentpackage";


function TravelAgentUploadPackage() {
    return (
        <div>
            <TravelAgentNavbar/>
            
            <TravelAgentPackage/>
        </div>

    );


}

export default TravelAgentUploadPackage;