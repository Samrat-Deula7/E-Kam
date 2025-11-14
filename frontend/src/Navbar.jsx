import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  setmenuOpen,
  setcontractorBtn,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("contractorId");
    setIsLoggedIn(false);
    navigation("/");
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? " backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="min-w-screen mx-auto px-4">
        <div className="flex justify-between sm:justify-around items-center h-16">
          <div className="w-2xl">
            <Link
              to="/"
              className=" text-2xl md:text-3xl lg:text-4xl font-bold   bg-[#3b82f6] bg-clip-text text-transparent"
            >
              E-Kam
            </Link>
          </div>

          {/* This is the desktop menu */}
          {/* In the class hidden sets display to hidden but md:flex sets display to flex from medium size to large */}

          <div className="hidden md:flex items-center gap-x-8">
            <Link
              to="/"
              className={` md:text-xl lg:text-3xl text-[#3b82f6] cursor-pointer hover:text-[#06b6d4] ${
                location.pathname === "/" ? "text-[#06b6d4]" : "text-[#3b82f6]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={` md:text-xl lg:text-3xl text-[#3b82f6] cursor-pointer hover:text-[#06b6d4] ${
                location.pathname === "/services"
                  ? "text-[#06b6d4]"
                  : "text-[#3b82f6]"
              }`}
            >
              Services
            </Link>
            <Link
              to="/admin"
              className={` md:text-xl lg:text-3xl   text-[#3b82f6] cursor-pointer hover:text-[#06b6d4] ${
                location.pathname === "/admin"
                  ? "text-[#06b6d4]"
                  : "text-[#3b82f6]"
              }${
                isLoggedIn
                  ? "  pointer-events-auto"
                  : "h-0 opacity-0 pointer-events-none"
              }`}
            >
              Admin
            </Link>
          </div>

          <button
            className={`border border-[#2563eb] py-1 px-3  2xl:py-3 2xl:md:px-6 cursor-pointer rounded font-medium tracking-all duration-200 text-[#3b82f6] hover:text-[#06b6d4]   hover:border-[#06b6d4] hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10${
              !isLoggedIn
                ? "  pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
            onClick={() => setcontractorBtn((prev) => !prev)}
          >
            Become a Contractor
          </button>
          <button
            className={`border border-slate-custom-700 py-1 px-3  2xl:py-3 2xl:md:px-6  cursor-pointer rounded font-medium tracking-all duration-200 text-gray-600 hover:text-stone-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10${
              isLoggedIn
                ? "  pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
            onClick={handleLogout}
          >
            Log Out
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
