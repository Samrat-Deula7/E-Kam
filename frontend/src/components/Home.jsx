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
    
      <div className="relative flex items-center  justify-center">
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
                  <span className="text-gray-400 text-sm mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
