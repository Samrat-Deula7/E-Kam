import { Link } from "react-router-dom";

const Signup = ({ contractorBtn, setcontractorBtn }) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        contractorBtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
        Sign Up
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            // value={formData.name}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            placeholder="example@gmail.com"
             // onChange={(e) => setFormData({ ...formData, name: e.target.value })}

          />
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            // value={formData.message}
            row={5}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            placeholder="Your Message..."
            // onChange={(e) =>
            //   setFormData({ ...formData, message: e.target.value })
            // }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Sign Up
        </button>
      </form>
      <Link to="/login" onClick={() => setcontractorBtn(false)}>
        Already got an account ?
      </Link>
    </div>
  );
};

export default Signup;
