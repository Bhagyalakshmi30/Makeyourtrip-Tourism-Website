 import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AllPackages from "../components/allpackagesdisplay";
import Viewpackage from "../components/allpackagesdisplay";
import AdminNavbar from "../components/adminnavbar";

function AdminViewPackages() {
    return (
        <div>

            <>
            <AdminNavbar/>
            <Viewpackage/>

               
               {/* <AdminApprovalCompo/> */}
                
                {/* <Footer /> */}
            </>

        </div>

    );


}

export default AdminViewPackages;