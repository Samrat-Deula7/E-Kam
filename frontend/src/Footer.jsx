const Footer = () => {
  return (
    <div className="border border-t-2 border-l-0 border-r-0 mx-12 xl:mx-30">
      <div className="flex items-center justify-center gap-x-3   mb-0 min-w-screen py-6  h-auto ">
        <div className="hidden md:flex font-bold text-4xl  flex-col  text-[#2563eb] ">
          <h1>Hope that </h1>
          <h1>we were able to help</h1>
        </div>
        <div className=" w-50 md:w-64 flex flex-col px-3 py-4b font-bold h-36 border-r-2 text-[#cbd5e1]">
          <h1>You can follw me on:</h1>
          <a href="https://www.facebook.com/samrat.deula.52" target="_blank">
            -<i className="fa-brands fa-facebook"></i>
            <span className="font-light text-[#22d3ee]">Facebook</span>
          </a>
          <a href="https://www.instagram.com/deula.samrat/" target="_blank">
            -<i className="fa-brands fa-instagram"></i>
            <span className="font-light text-[#22d3ee]">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/samrat-deula-412531369/"
            target="_blank"
          >
            -<i className="fa-brands fa-linkedin"></i>
            <span className="font-light text-[#22d3ee]">Linkedin</span>
          </a>
          <a href="https://github.com/Samrat-Deula7" target="_blank">
            -<i className="fa-brands fa-github"></i>
            <span className="font-light text-[#22d3ee]">Github</span>
          </a>
        </div>
        <div className=" w-50 md:w-64 flex flex-col px-3 py-4 font-bold h-43 text-[#cbd5e1]">
          <h1>Discover:</h1>
          <ul className=" pl-5 ">
            <li className="text-[#cbd5e1]">
              -<span className="text-[#22d3ee]">Become a contractor</span>
            </li>
            <li className="text-[#cbd5e1]">
              -<span className="text-[#22d3ee]">Get customers</span>
            </li>
            <li className="text-[#cbd5e1]">
              -
              <span className="text-[#22d3ee]">Earn through your services</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
