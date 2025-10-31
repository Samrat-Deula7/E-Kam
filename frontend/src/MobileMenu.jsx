import { Link,useLocation } from "react-router-dom";
const MobileMenu = ({ menuOpen, setmenuOpen, isLoggedIn }) => {
  const location=useLocation();
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setmenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer "
        aria-label="Close button"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </Link>
      <Link
        to="/services"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Services
      </Link>
      <Link
        to="/admin"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          location.pathname === "/admin" ? "text-white" : ""
        }${
          isLoggedIn
            ? "  pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Admin
      </Link>
    </div>
  );
};

export default MobileMenu;
