import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AllPackages from "../components/allpackagesdisplay";
import ViewUsers from "../components/allusersdisplay";
import AdminNavbar from "../components/adminnavbar";

function AdminViewUsers() {
    return (
        <div>

            <>
                <AdminNavbar />


                <ViewUsers />

                <Footer />
            </>

        </div>

    );


}

export default AdminViewUsers;