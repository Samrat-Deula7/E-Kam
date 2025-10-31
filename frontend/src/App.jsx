import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Services from "./components/services";
import Footer from "./footer";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect } from "react";
import ContractorState from "../context/ContractorState";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [contractorBtn, setcontractorBtn] = useState(false);
  const [signupBtn, setSignupBtn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <ContractorState>
        <Router>
          <Navbar
            menuOpen={menuOpen}
            setmenuOpen={setmenuOpen}
            contractorBtn={contractorBtn}
            setcontractorBtn={setcontractorBtn}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
          <Signup
            contractorBtn={contractorBtn}
            setcontractorBtn={setcontractorBtn}
            setSignupBtn={setSignupBtn}
          />
          <Login
            setcontractorBtn={setcontractorBtn}
            signupBtn={signupBtn}
            setSignupBtn={setSignupBtn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </Router>
      </ContractorState>
    </>
  );
}

export default App;
