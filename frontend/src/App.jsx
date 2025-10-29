import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu";
import Home from "./components/Home";
import Services from "./components/services";
import Footer from "./footer";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect } from "react";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [contractorBtn, setcontractorBtn] = useState(false);

  // The following useEffect prevents the page form scrolling when the hamburger icon is open

  useEffect(() => {
    if (menuOpen || contractorBtn) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [menuOpen, contractorBtn]);
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
