import { useContext, useState } from "react";

const UpdateData = ({ setUpdateOpen, updateOpen }) => {
        
    const [validationError, setValidationError] = useState({
      name: "",
      email: "",
      password: "",
      phoneno: "",
      experience: "",
      cost: "",
      work: "",
    });
    const [credentials, setCredentials] = useState({
      name: "",
      email: "",
      password: "",
      phoneno: "",
      cpassword: "",
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
        const token=localStorage.getItem("token")
      try {
            if (credentials.password == credentials.cpassword) {

          // API Call
          const url = ` https://e-kam.onrender.com/api/contractor/updatedata/${id}`;
          const { name, email, password, phoneno, experience, cost, work } =
            credentials;

          const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token":token
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
              name: "",
              email: "",
              password: "",
              cpassword: "",
              phoneno: "",
              experience: "",
              cost: "",
              work: "",
            });
            alert("Account Updated");
            setUpdateOpen(false);
            //  props.showAlert("Successfully created your account", "success");
          } else {
            //  props.showAlert("Invalid Details", "danger");
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
        }
        else{
           alert("Both password must be same");

        }
      } catch (error) {
        alert(error.message);
      }
    };

    

    return (
      <div
        className={`fixed top-0 left-0 max-w-screen w-full bg-[#181C14] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          updateOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-96 md:w-xl lg:w-2xl xl:w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-gray-600 to-white bg-clip-text text-transparent text-center">
            Update Data
          </h2>
          <button
            onClick={() => {
              setUpdateOpen(false);
            }}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer "
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
                  value={credentials.name}
                  className="w-90 mb-2 md:w-94  bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                 
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
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
               
                  onChange={onChange}
                  value={credentials.email}
                />
              </div>

              <div className="relative">
                <h6 className="text-red-500">{validationError.password}</h6>
                <input
                  type="password"
                  id="update-password"
                  name="password"
                  required
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Enter your password"
                  onChange={onChange}
                  value={credentials.password}
                />
              </div>
              <div className="relative">
                <h6 className="text-red-500">{validationError.password}</h6>
                <input
                  type="password"
                  id="update-cpassword"
                  name="cpassword"
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Confirm password"
                  onChange={onChange}
                  value={credentials.cpassword}
                />
              </div>

              <div className="relative">
                <h6 className="text-red-500">{validationError.phoneno}</h6>
                <input
                  type="text"
                  id="update-phoneno"
                  name="phoneno"
                  required
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              
                  onChange={onChange}
                  value={credentials.phoneno}
                />
              </div>

              <div className="relative">
                <h6 className="text-red-500">{validationError.experience}</h6>
                <input
                  type="text"
                  id="update-experience"
                  name="experience"
                  required
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                
                  onChange={onChange}
                  value={credentials.experience}
                />
              </div>
              <div className="relative">
                <h6 className="text-red-500">{validationError.cost}</h6>
                <input
                  type="text"
                  id="update-cost"
                  name="cost"
                  required
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                 
                  onChange={onChange}
                  value={credentials.cost}
                />
              </div>

              <div className="relative">
                <h6 className="text-red-500">{validationError.work}</h6>
                <input
                  type="text"
                  id="update-work"
                  name="work"
                  required
                  // value={formData.email}
                  className="w-90 mb-2 md:w-94 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
             
                  onChange={onChange}
                  value={credentials.work}
                />
              </div>
            </div>

            <button
              onClick={updateUser}
              type="submit"
              className="w-90 md:w-full mb-2 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateData;