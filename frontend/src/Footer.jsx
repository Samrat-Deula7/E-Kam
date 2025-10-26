const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-x-3   mb-0 min-w-screen py-6 px-4  bg-gray-500/50   h-auto">
      <div className="hidden md:flex font-bold text-4xl  flex-col  bg-linear-to-r from-gray-500 to-white bg-clip-text text-transparent ">
        <h1>Hope that </h1>
        <h1>we were able to help</h1>
      </div>
      <div className=" w-64 flex flex-col px-3 py-4b font-bold h-36 border-r-2 border-gray-500">
        <h1>You can follw me on:</h1>
        <a href="https://www.facebook.com/samrat.deula.52" target="_blank">
          -<i className="fa-brands fa-facebook"></i>
          <span className="font-light">Facebook</span>
        </a>
        <a href="https://www.instagram.com/deula.samrat/" target="_blank">
          -<i className="fa-brands fa-instagram"></i>
          <span className="font-light">Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/samrat-deula-412531369/"
          target="_blank"
        >
          -<i className="fa-brands fa-linkedin"></i>
          <span className="font-light">Linkedin</span>
        </a>
        <a href="https://github.com/Samrat-Deula7" target="_blank">
          -<i className="fa-brands fa-github"></i>
          <span className="font-light">Github</span>
        </a>
      </div>
      <div className=" w-64 flex flex-col px-3 py-4 font-bold h-43">
        <h1>Discover:</h1>
        <ul className="list-disc pl-5">
          <li>Become a contractor</li>
          <li>Get customers</li>
          <li>Earn through your services</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
