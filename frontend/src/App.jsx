import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu";
import Home from "./components/Home";
import Services from "./components/services";
import Footer from "./footer";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";


function App() {
const[menuOpen,setmenuOpen]=useState(false);
const[contractorBtn,setcontractorBtn]=useState(false);
  return (
    <>
      <Router>
        <Navbar
          menuOpen={menuOpen}
          setmenuOpen={setmenuOpen}
          contractorBtn={contractorBtn}
          setcontractorBtn={setcontractorBtn}
        />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Signup
          contractorBtn={contractorBtn}
          setcontractorBtn={setcontractorBtn}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
