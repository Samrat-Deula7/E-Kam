import { useContext, useEffect, useState } from "react";
import ContractorContext from "../context/ContractorContext";

const UpdateData = ({ setUpdateOpen, updateOpen, setLoading }) => {
  const context = useContext(ContractorContext);
  const { getData, contractorData } = context;

  useEffect(() => {
    getData();
    setCredentials({
      name: contractorData.name,
      email: contractorData.email,
      password: "",
      cpassword: "",
      phoneno: contractorData.phoneno,
      experience: contractorData.experience,
      cost: contractorData.cost,
      work: contractorData.work,
    });
  }, [updateOpen]);
  const [validationError, setValidationError] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    cpassword: "",
    experience: "",
    cost: "",
    work: "",
  });
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    experience: "",
    cost: "",
    work: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateUser = async () => {
    const id = localStorage.getItem("contractorId");
    const token = localStorage.getItem("token");
    try {
      if (credentials.password == credentials.cpassword) {
        // API Call
        const url = ` https://e-kam-jwlb.vercel.app/api/contractor/updatedata/${id}`;
        const { name, email, password, phoneno, experience, cost, work } =
          credentials;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
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
        if (result.contractorId) {
          // Save the auth token and redirect
          setCredentials({
            name: contractorData.name,
            email: contractorData.email,
            password: "",
            cpassword: "",
            phoneno: contractorData.phoneno,
            experience: contractorData.experience,
            cost: contractorData.cost,
            work: contractorData.work,
          });
          alert("Account Updated");
          setUpdateOpen(false);
        } else {
          const getErrorMessage = (field) => {
            const error = result.errors.find((e) => e.path === field);
            return error?.msg || null;
          };
          setValidationError({
            name: getErrorMessage("name"),
            email: getErrorMessage("email"),
            password: getErrorMessage("password"),
            phoneno: getErrorMessage("phoneno"),
            experience: getErrorMessage("experience"),
            cost: getErrorMessage("cost"),
            work: getErrorMessage("work"),
          });
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
        updateOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[300px] lg:w-[600px] xl:w-[800px] 2xl:w-[800px] text-center bg-[#10172a] rounded-2xl py-3 px-2">
        <h2 className="text-2xl  xl:text-6xl font-bold mb-8 text-[#2563eb] text-center">
          Update Data
        </h2>
        <button
          onClick={() => {
            setUpdateOpen(false);
          }}
          className="absolute top-4 right-6 text-xl lg:text-3xl  focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <div className="relative">
              <h6 className="text-red-500">{validationError.name}</h6>
              <input
                type="text"
                id="update-name"
                name="name"
                value={credentials.name || ""}
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                required
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.email}</h6>
              <input
                type="email"
                id="update-email"
                name="email"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                value={credentials.email || ""}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.password}</h6>
              <input
                type="password"
                id="update-password"
                name="password"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Enter your password"
                onChange={onChange}
                value={credentials.password || ""}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.password}</h6>
              <input
                type="password"
                id="update-cpassword"
                name="cpassword"
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                placeholder="Confirm password"
                onChange={onChange}
                value={credentials.cpassword || ""}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.phoneno}</h6>
              <input
                type="text"
                id="update-phoneno"
                name="phoneno"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                value={credentials.phoneno || ""}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.experience}</h6>
              <input
                type="text"
                id="update-experience"
                name="experience"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                value={credentials.experience || ""}
              />
            </div>
            <div className="relative">
              <h6 className="text-red-500">{validationError.cost}</h6>
              <input
                type="text"
                id="update-cost"
                name="cost"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                value={credentials.cost || ""}
              />
            </div>

            <div className="relative">
              <h6 className="text-red-500">{validationError.work}</h6>
              <input
                type="text"
                id="update-work"
                name="work"
                required
                className="w-[280px] mb-1 xl:mb-2 xl:w-94 bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
                onChange={onChange}
                value={credentials.work || ""}
              />
            </div>
          </div>

          <button
            onClick={updateUser}
            type="submit"
            className="w-[280px] xl:w-full mb-2 mt-1 bg-blue-500 text-white py-1 px-3 xl:py-3 xl:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
