const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-x-3  mb-0 min-w-screen py-6 px-4  bg-gray-500/50  h-28 md:h-36">
      <div className="bg-red-600 w-60 flex flex-col ">
        <h1>You can follw me on:</h1>
        <a href="">Facebook</a>
        <a href="">Facebook</a>
        <a href="">Facebook</a>
      </div>
      <div className="bg-yellow-300 w-60 flex flex-col ">
        <h1>Discover</h1>
        <ul>
          <li>Become a contractor</li>
          <li>Get customers</li>
          <li>Earn through your services</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
