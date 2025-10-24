
const Navbar = () => {
  return (
    <nav className="fixed top-0 min-w-screen z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="min-w-screen mx-auto px-4">
        <div className="flex justify-between sm:justify-around items-center h-16">
          <a
            href="#"
            className="font-mono text-xl font-bold  bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            E-Kam
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
