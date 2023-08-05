
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
import TravelAgentPackage from './routes/travelagentpackage';
import { ToastContainer } from 'react-toastify';
import TravelAgentPackageView from './routes/travelagentpackageview';
import AdminViewPackages from './routes/adminviewpackages';




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
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/adminapproval" element={<AdminApproval/>}/>
        <Route path="/admingallery" element={<AdminGallery/>}/>
        <Route path="/viewallpackages" element={<AdminViewPackages/>}/>
        <Route path="/travelagenthome" element={<TravelAgentHome/>}/>
        <Route path="/travelagentpackage" element={<TravelAgentPackage/>}/>
        <Route path="/travelagentsviewpackages" element={<TravelAgentPackageView/>}/>
       

      </Routes>
      <ToastContainer/>
      
    
    
    </div>
  );
}

export default App;
