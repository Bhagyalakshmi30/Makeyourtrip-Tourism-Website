import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AllPackages from "../components/allpackagesdisplay";
import ViewUsers from "../components/allusersdisplay";
import Viewagent from "../components/allagentsdisplay";
import AdminNavbar from "../components/adminnavbar";

function AdminViewAgents() {
    return (
        <div>

            <>
            
                <AdminNavbar/>
              
               <Viewagent/>
                
                <Footer />
            </>

        </div>

    );


}

export default AdminViewAgents;