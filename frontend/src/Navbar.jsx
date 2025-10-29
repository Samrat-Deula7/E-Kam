import { Link, useLocation } from "react-router-dom";
import { use, useEffect } from "react";

const Navbar = (
  { menuOpen, setmenuOpen, contractorBtn, setcontractorBtn }
) => {
  const location = useLocation();


  return (
    <nav className="fixed top-0 max-w-screen z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="min-w-screen mx-auto px-4">
        <div className="flex justify-between sm:justify-around items-center h-16">
          <Link
            to="/"
            className=" text-2xl md:text-3xl lg:text-4xl font-bold  bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent"
          >
            E-Kam
          </Link>

          {/* This is the desktop menu */}
          {/* In the class hidden sets display to hidden but md:flex sets display to flex from medium size to large */}

          <div className="hidden md:flex items-center gap-x-8">
            <Link
              to="/"
              className={` md:text-xl lg:text-3xl bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent cursor-pointer hover:text-stone-200 ${
                location.pathname === "/" ? "text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={` md:text-xl lg:text-3xl bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent cursor-pointer hover:text-stone-200 ${
                location.pathname === "/services" ? "text-white" : ""
              }`}
            >
              Services
            </Link>
          </div>

          <button
            className="border border-gray-500/50 py-3 px-6 cursor-pointer rounded font-medium tracking-all duration-200 text-gray-600 hover:text-stone-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10"
            onClick={() => setcontractorBtn((prev) => !prev)}
          >
            Become a Contractor
          </button>

          {/* This is the mobile menu */}
          <div
            className=" w-7 h-5 relative left-0 cursor-pointer z-40 md:hidden"
            onClick={() => setmenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
