import { Link } from "react-router-dom";
import Search from "../assets/studies.gif"
import Search2 from "../assets/search-file.gif"
const Home = () => {
//   Find the Right Help, Fast
// We connect you with skilled contractors for all kinds of odd jobs and home services.
// Whether it’s repairs, installations, or custom projects — we’ll match you with the right professional.
 const stats = [
   { value: "8,000+", label: "Creators on the platform" },
   { value: "3%", label: "Flat platform fee" },
   { value: "99.9%", label: "Uptime guarantee" },
   { value: "$70M", label: "Paid out to creators" },
 ];

  return (
    <>
      <div className=" pt-10 min-h-screen px-8 flex  items-center gap-x-7 w-full">
        <div className="grid grid-cols-1 md:ml-35 place-items-center md:place-items-start ">
          <h1 className="font-bold text-3xl mb-5 md:text-6xl md:mb-7">
            Find the <span className="text-[#2563eb]">Right Help</span>, Fast
          </h1>
          <h3 className="text-2xl md:3xl text-left md:text-left mb-3 md:mb-4 text-[#cbd5e1]">
            We connect you with skilled contractors for all kinds of odd jobs
            and home services.
            <span>
              {" "}
              Whether it’s repairs, installations, or custom projects — we’ll
              match you with the right professional.
            </span>
          </h3>
          <p className="text-[#22d3ee] mb-5 md:xl">
            lets find the right contractor for you:
          </p>
          <Link
            to="/services"
            className=" py-3 px-6 md:text-xl cursor-pointer rounded font-medium md:font-bold tracking-all duration-200 bg-[#0891b2] text-[#cbd5e1] hover:text-stone-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10"
          >
            Services
          </Link>
        </div>
        <div className="relative hidden xl:flex mr-35  w-[1200px] h-[400px]">
          <img
            src={Search}
            alt="gif"
            className="w-[250px] h-[250px] absolute -left-6 -top-6 z-10 rounded-2xl "
          />
          <img
            src={Search2}
            alt="gif"
            className="w-[250px] h-[250px] absolute left-40 bottom-0 rounded-2xl"
          />
        </div>
      </div>

      <section className="w-full  text-[#2563eb] py-20 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-4">
            Trusted by user worldwide
          </h2>
          <p className="text-center text-gray-400 mb-12">
           This stats are just for demo purposes
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#10172a] border border-gray-700 rounded-xl py-10 flex flex-col items-center"
              >
                <span className="text-3xl font-semibold">{item.value}</span>
                <span className="text-gray-400 text-sm mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
