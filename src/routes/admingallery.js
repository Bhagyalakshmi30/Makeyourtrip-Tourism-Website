import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AdminImageComponent from "../components/admingalleryupload";
import ImageGallery from "../components/gallery";

function AdminGallery() {
    return (
        <div>

            <>
                {/* <Navbar/> */}
               
               <AdminImageComponent/>
               
                <ImageGallery/>
                <Footer />
            </>

        </div>

    );


}

export default AdminGallery;