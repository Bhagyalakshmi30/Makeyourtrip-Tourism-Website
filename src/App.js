
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Service from "./routes/service";
import Register from "./components/register";
import LoginC from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PackageMain from './components/packagemain';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<LoginC/>}/>
       

      </Routes>
      
    
    
    </div>
  );
}

export default App;
