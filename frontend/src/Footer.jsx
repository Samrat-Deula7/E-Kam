const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-x-3   mb-0 min-w-screen py-6 px-4  bg-gray-500/50   h-auto">
      <div className="hidden md:flex font-bold text-4xl  flex-col">
        <h1>Hope that </h1>
        <h1>we were able to help</h1>
      </div>
      <div className=" w-64 flex flex-col px-3 py-4b font-bold h-36 border-r-2 border-gray-500">
        <h1>You can follw me on:</h1>
        <a href="" target="_blank">
          -<i class="fa-brands fa-facebook"></i>
          <span className="font-light">Facebook</span>
        </a>
        <a href="" target="_blank">
          -<i class="fa-brands fa-instagram"></i>
          <span className="font-light">Instagram</span>
        </a>
        <a href="" target="_blank">
          -<i class="fa-brands fa-linkedin"></i>
          <span className="font-light">Linkedin</span>
        </a>
        <a href="" target="_blank">
          -<i class="fa-brands fa-github"></i>
          <span className="font-light">Github</span>
        </a>
        <a href="" target="_blank">
          -<i class="fa-solid fa-envelope"></i>
          <span className="font-light">Email</span>
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
