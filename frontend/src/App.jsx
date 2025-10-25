import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar"
import Home from "./components/Home";
import Services from "./components/services";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
