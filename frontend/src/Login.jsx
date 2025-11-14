import { useState } from "react";
import { useEffect } from "react";

const Login = ({
  setcontractorBtn,
  signupBtn,
  setSignupBtn,
  setIsLoggedIn,
}) => {
  const [loginErrorValidation, setLoginErrorValidation] = useState({
    loginError1: "",
    loginError2: "",
  });
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const createUser = async () => {
    setSignupBtn(true);
    // API Call
    const url = "https://e-kam-jwlb.vercel.app/api/contractor/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.authtoken && result.contractorId) {
        // Save the auth token and redirect
         setCredentials({
           email: "",
           password: "",
         });
        alert("logged in");
        setIsLoggedIn(true);
        localStorage.setItem("token", result.authtoken);
        localStorage.setItem("contractorId", result.contractorId);
        setSignupBtn(false);
      
        // props.showAlert("Logged into your account successfully", "success");
      } else {
        // props.showAlert("Invalid credentials", "danger");
        if (result.errors) {
          const getErrorMessage = (field) => {
            const errors = result.errors.find((e) => e.path === field);
            return errors?.msg || null;
          };
          setLoginErrorValidation({
            loginError1: getErrorMessage("email"),
            loginError2: "",
          });
        } else {
          const error2 = result.error;
          setLoginErrorValidation({
            loginError1: "",
            loginError2: error2,
          });
        }

        setIsLoggedIn(false);
        setSignupBtn(true);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[#181C14] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        signupBtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-96 md:w-xl lg:w-2xl xl:w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent text-center">
          Log in to your account
        </h2>
        <h6 className="text-red-500">{loginErrorValidation.loginError1}</h6>
        <h6 className="text-red-500">{loginErrorValidation.loginError2}</h6>
        <button
          onClick={() => {
            setSignupBtn(false);
          }}
          className="absolute top-25 right-10 text-white text-3xl focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-center "
        >
          <div className="relative">
            <input
              type="email"
              id="login-email"
              name="email"
              // value={formData.email}
              className="w-90 md:w-120 mb-2  bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onChange={onChange}
              value={credentials.email}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="login-password"
              name="password"
              // value={formData.email}
              className="w-90 md:w-120  mb-2  bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Enter your password"
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onChange={onChange}
              value={credentials.password}
            />
          </div>

          <button
            onClick={createUser}
            id="login"
            type="submit"
            className="w-90 md:w-120  mb-2 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Log in
          </button>
        </form>
        <button
          onClick={() => {
            setcontractorBtn(true);
            setSignupBtn(false);
          }}
          className="text-blue-600 underline cursor-pointer"
        >
          Don't have an account?
        </button>
      </div>
    </div>
  );
};

export default Login;
