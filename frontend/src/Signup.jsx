

const Signup = ({
  setcontractorBtn,
  contractorBtn,
  setSignupBtn,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[#181C14] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        contractorBtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-96 md:w-xl lg:w-2xl xl:w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent text-center">
          Sign Up
        </h2>
        <button
          onClick={() => {
            setcontractorBtn(false);
          }}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="text-center">
          <div className="grid grid-cols-1 xl:grid-cols-2  place-items-center">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                // value={formData.name}
                className="w-90 mb-2 md:w-94  bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name...."
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter your password"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type="cpassword"
                id="cpassword"
                name="cpassword"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Confirm password"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="phoneno"
                name="phoneno"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter your phone no"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="experience"
                name="experience"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter your work experience"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="cost"
                name="cost"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter your price range"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="work"
                name="work"
                required
                // value={formData.email}
                className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter what work you do"
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-90 md:w-full mb-2 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={() =>{ setcontractorBtn(false);setSignupBtn(true)}}
          className="text-blue-600 underline"
        >
          Already got an account ?
        </button>
      </div>
    </div>
  );
};

export default Signup;
