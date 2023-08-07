
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Service from "./routes/service";
import Login from "./routes/login"
import Register from "./components/register";
import ContactForm from './components/contactform'
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './routes/gallery'

import AdminHome from './routes/adminhome';
import TravelAgentHome from './routes/travelagenthome';
import AdminApproval from './routes/adminapproval';
import AdminGallery from './routes/admingallery';
import TravelAgentPackage from './components/travelagentpackage';
import { ToastContainer } from 'react-toastify';
import TravelAgentPackageView from './routes/travelagentpackageview';
import AdminViewPackages from './routes/adminviewpackages';
import AdminViewUsers from './routes/adminviewusers';
import AdminViewAgents from './routes/adminviewagents';
import ViewAllPackages from './components/viewpackages';
import PackageSearchPage from './components/packagesearchpage';
import PriceSort from './components/pricesort';
import DestinationsList from './components/destinationlist';
import PackagesByDestination from './components/packagesbydestination';
import PostHotel from './components/posthotel';
import BookingForm from './components/booking';
import PackageDetailsPage from './components/packagedetailspage';
import HotelList from './components/hotellist';
import TravelAgentUploadPackage from './routes/travelagentuploadpackage';

import Navbar from './components/navbar';
import TravelAgentUploadHotel from './routes/travelagentuploadhotel';
import TravelAgentUploadRestaurant from './routes/travelagentuploadrestaurants';
import TravelAgentUploadSpots from './routes/travelagentuploadspot';
import TravelAgentViewPackage from './routes/travelagentviewpackage';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contactform" element={<ContactForm/>}/>
        <Route path="/userviewallpackages" element={<ViewAllPackages/>}/>
        <Route path="/packagesearch" element={<PackageSearchPage/>}/>
        <Route path="/pricesort" element={<PriceSort/>}/>
        <Route path="/destinationlist" element={<DestinationsList/>}/>
        <Route path="/Package/destination/:destination" element={<PackagesByDestination />} />

        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/adminapproval" element={<AdminApproval/>}/>
        <Route path="/admingallery" element={<AdminGallery/>}/>
        <Route path="/viewallpackages" element={<AdminViewPackages/>}/>
        <Route path="/viewallusers" element={<AdminViewUsers/>}/>
        <Route path="/viewallagents" element={<AdminViewAgents/>}/>
        <Route path="/travelagenthome" element={<TravelAgentHome/>}/>
        <Route path="/uploadpackages" element={<TravelAgentUploadPackage/>}/>
        <Route path="/uploadhotels" element={<TravelAgentUploadHotel/>}/>
        <Route path="/uploadrestaurants" element={<TravelAgentUploadRestaurant/>}/>
        <Route path="/uploadspots" element={<TravelAgentUploadSpots/>}/>
        <Route path="/packagedetails" component={PackageDetailsPage} />
        <Route path="/viewaagentpackage" element={<TravelAgentViewPackage/>}/>
        
        <Route path="/hotellist/:destination" element={<HotelList/>} />
        <Route path="/post-hotel" element={<PostHotel/>} />
        <Route path="/travelagentsviewpackages" element={<TravelAgentPackageView/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
       

      </Routes>
      <ToastContainer position="bottom-right" />
      
    
    
    </div>
  );
}

export default App;
