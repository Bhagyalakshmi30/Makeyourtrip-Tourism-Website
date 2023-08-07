import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AdminImageComponent from "../components/admingalleryupload";
import ImageGallery from "../components/gallery";
import AdminNavbar from "../components/adminnavbar";

function AdminGallery() {
    return (
        <div>

            <>
                {/* <Navbar/> */}
                <AdminNavbar/>
               
               <AdminImageComponent/>
               
                {/* <ImageGallery/> */}
                
            </>

        </div>

    );


}

export default AdminGallery;