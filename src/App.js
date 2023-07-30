
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Service from "./routes/service";
import Register from "./components/registrationform";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
       

      </Routes>
      
    
    
    </div>
  );
}

export default App;
