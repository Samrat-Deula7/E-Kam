import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" pt-10 min-h-screen px-8 flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 place-items-center">
        <h1 className="font-bold bg-linear-to-r from-stone-600 to-white bg-clip-text text-transparent text-3xl mb-5 md:text-6xl md:mb-7">
          Welcome to our website
        </h1>
        <h3 className="text-2xl md:3xl text-center mb-3 md:mb-4 text-stone-600">
          Here you can find the right person to do your miscellaneous jobs.
        </h3>
        <p className="text-gray-400 mb-5 md:xl">
          lets find the right contractor for you:
        </p>
        <Link
          to="/search"
          className=" py-3 px-6 md:text-xl cursor-pointer rounded font-medium md:font-bold tracking-all duration-200 bg-stone-600 text-gray-400 hover:text-stone-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
