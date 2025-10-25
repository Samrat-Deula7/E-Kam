import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu";
import Home from "./components/Home";
import Services from "./components/services";
import { useState } from "react";


function App() {
const[menuOpen,setmenuOpen]=useState(false);
  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
