const Admin = () => {
  return (
    <div className="pt-16  min-h-screen px-8 flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <h1 className="font-bold bg-linear-to-r from-stone-600 to-white bg-clip-text text-transparent  mb-5 text-xl md:text-3xl lg:text-4xl ">
          Welcome Contractor:
          <br /> You can Update and Delete your information here
        </h1>

        <div className=" w-100 md:w-125 lg:w-150">
          <h3 className="text-2xl md:3xl text-center mb-3 md:mb-4 text-stone-600">
            Your Details:
          </h3>
          <h2 className="mb-4">
            Do You want to update anything??...{" "}
            <span>
              <i className="fa-solid fa-pen-to-square cursor-pointer  hover:text-gray-400 hover:-translate-y-1 text-xl"></i>
            </span>
          </h2>

          <div className="flex items-center justify-between bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Name:
              </span>{" "}
              SammmmSamSam
            </h2>
          </div>

          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Email:
              </span>{" "}
              SammmmSam@gmail.com
            </h2>
          </div>

          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Phone no:
              </span>{" "}
              9909999845
            </h2>
          </div>
          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Experience:
              </span>{" "}
              4years
            </h2>
          </div>
          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Cost:
              </span>{" "}
              1000 to 3000
            </h2>
          </div>
          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Your Work:
              </span>{" "}
              web dev1
            </h2>
          </div>
          <h2 className="mt-4 text-red-500">
            Want to delete your data??...{" "}
            <span>
              <i class="fa-solid fa-trash cursor-pointer  hover:text-gray-400 hover:-translate-y-1 text-xl"></i>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Admin;
