import { useState } from "react";

const Signup = ({
  setcontractorBtn,
  contractorBtn,
  setSignupBtn,
  setLoading,
}) => {
  const [validationError, setValidationError] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    experience: "",
    cost: "",
    work: "",
    userExistsError: "",
  });
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phoneno: "",
    experience: "",
    cost: "",
    work: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const preventDefault = async (e) => {
    e.preventDefault();
  };

  const createUser = async () => {
    
    try {
      if (credentials.password == credentials.cpassword) {
        // API Call
        const url =
          "https://e-kam-jwlb.vercel.app/api/contractor/createcontractor";
        const { name, email, password, phoneno, experience, cost, work } =
          credentials;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            phoneno,
            experience,
            cost,
            work,
          }),
        });
        const result = await response.json();
        console.log(result);
        if (result.authtoken) {
          // Save the auth token and redirect
          setCredentials({
            name: "",
            email: "",
            password: "",
            cpassword: "",
            phoneno: "",
            experience: "",
            cost: "",
            work: "",
          });
          setValidationError({
            name: "",
            email: "",
            password: "",
            phoneno: "",
            experience: "",
            cost: "",
            work: "",
            userExistsError: "",
          });
          setLoading(false);
          setcontractorBtn(false);
          setSignupBtn(true);
          localStorage.setItem("token", result.authtoken);
          alert("Account Created");
        } else {
          if (result.error) {
            setLoading(false);
            const alreadyExistsError = result.error;
            setValidationError({
              name: "",
              email: "",
              password: "",
              phoneno: "",
              experience: "",
              cost: "",
              work: "",
              userExistsError: alreadyExistsError,
            });
          } else {
            const getErrorMessage = (field) => {
              const error = result.errors.find((e) => e.path === field);
              return error?.msg || null;
            };
            setLoading(false);
            setValidationError({
              name: getErrorMessage("name"),
              email: getErrorMessage("email"),
              password: getErrorMessage("password"),
              phoneno: getErrorMessage("phoneno"),
              experience: getErrorMessage("experience"),
              cost: getErrorMessage("cost"),
              work: getErrorMessage("work"),
              userExistsError: "",
            });
          }
        }
      } else {
        alert("Both password must be same");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 min-w-screen  bg-[#020617CC] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        contractorBtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[300px] lg:w-[600px] xl:w-[800px] 2xl:w-[800px] text-center bg-[#10172a] rounded-2xl py-3 px-2">
        <h2 className="text-2xl  xl:text-6xl font-bold mb-8 text-[#2563eb] text-center">
          Sign Up
        </h2>
        <h6 className="text-red-500">{validationError.userExistsError}</h6>

        <button
          onClick={() => {
            setcontractorBtn(false);
          }}
          className="absolute top-4 right-6 text-xl lg:text-3xl  focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form onSubmit={preventDefault}>
          <div className="grid grid-cols-1 xl:grid-cols-2  place-items-center">
            <div className="relative">
              <h6 className="text-red-500">{validationError.name}</h6>
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                className="w-[280px] mb-1 xl:mb-2 xl:w-94  bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Name...."
                onChange={onChange}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.email}</h6>
              <input
                type="email"
                id="email"
                name="email"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="example@gmail.com"
                onChange={onChange}
                value={credentials.email}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.password}</h6>
              <input
                type="password"
                id="password"
                name="password"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter your password"
                onChange={onChange}
                value={credentials.password}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.password}</h6>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Confirm password"
                onChange={onChange}
                value={credentials.cpassword}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.phoneno}</h6>
              <input
                type="text"
                id="phoneno"
                name="phoneno"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter your phone no"
                onChange={onChange}
                value={credentials.phoneno}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.experience}</h6>
              <input
                type="text"
                id="experience"
                name="experience"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter your work experience"
                onChange={onChange}
                value={credentials.experience}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.cost}</h6>
              <input
                type="text"
                id="cost"
                name="cost"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter your price range"
                onChange={onChange}
                value={credentials.cost}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.work}</h6>
              <input
                type="text"
                id="work"
                name="work"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter what work you do"
                onChange={onChange}
                value={credentials.work}
              />
            </div>
          </div>

          <button
            onClick={()=>{createUser;setLoading(true);}}
            type="submit"
            className="w-[280px] xl:w-full mb-2 mt-1 bg-blue-500 text-white py-1 px-3 xl:py-3 xl:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={() => {
            setcontractorBtn(false);
            setSignupBtn(true);
          }}
          className="text-blue-600 underline cursor-pointer"
        >
          Already got an account ?
        </button>
      </div>
    </div>
  );
};

export default Signup;
