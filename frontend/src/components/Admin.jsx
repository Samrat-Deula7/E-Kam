import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContractorContext from "../../context/ContractorContext";
import { useState } from "react";

const Admin = ({
  setUpdateOpen,
  setIsLoggedIn,
  updateOpen,
  deleteButton,
  setDeleteButton,
}) => {
  const context = useContext(ContractorContext);
  const { deleteData, getData, contractorData } = context;

  const navigation = useNavigate();
  const ContractorId = localStorage.getItem("contractorId");

  useEffect(() => {
    getData();
  }, [updateOpen]);

  const deleteAccount = () => {
    setIsLoggedIn(false);
    setDeleteButton(false);
    navigation("/");
    deleteData(ContractorId);
  };
  return (
    <div className="relative pt-16  min-h-screen px-8 flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center">
        <h1 className="font-bold text-[#cbd5e1]  mb-5 text-xl md:text-3xl lg:text-4xl ">
          <span className="text-[#2563eb]">Welcome Contractor:</span>
          <br /> You can Update and Delete your information here
        </h1>

        <div className=" w-85  md:w-150 lg:w-150">
          <h3 className="text-2xl md:3xl text-center mb-3 md:mb-4 text-[#cbd5e1]">
            Your <span className="text-[#2563eb]">Details:</span>
          </h3>
          <h2 className="mb-4">
            Do You want to update anything??...{" "}
            <span>
              <i
                onClick={() => setUpdateOpen(true)}
                className="fa-solid fa-pen-to-square cursor-pointer  duration-100 hover:text-gray-400 hover:-translate-y-1 text-xl"
              ></i>
            </span>
          </h2>

          <div className="flex items-center justify-between bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Name:
              </span>
              <span className="text-[#2563eb] font-bold text-xl md:text-2xl">
                {contractorData.name}
              </span>
            </h2>
          </div>

          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Email:
              </span>{" "}
              {contractorData.email}{" "}
            </h2>
          </div>

          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Phone no:
              </span>{" "}
              {contractorData.phoneno}
            </h2>
          </div>

          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Experience:
              </span>{" "}
              {contractorData.experience}{" "}
            </h2>
          </div>
          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Cost:
              </span>{" "}
              {contractorData.cost}{" "}
            </h2>
          </div>
          <div className=" bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg mb-1 rounded px-2 py-4">
            <h2>
              <span className="text-gray-400 font-bold text-xl md:text-2xl ">
                Your Work:
              </span>{" "}
              {contractorData.work}{" "}
            </h2>
          </div>

          <h2 className="mt-4 text-red-500">
            Want to delete your account??...{" "}
            <span>
              <i
                onClick={() => setDeleteButton((prev) => !prev)}
                className="fa-solid fa-trash cursor-pointer duration-100 hover:text-gray-400 hover:-translate-y-1 text-xl mb-4"
              ></i>
            </span>
          </h2>

          {/* Delete pop up */}
          <div
            className={`flex justify-center items-center absolute top-0 right-0 min-w-screen  bg-[#020617CC]  ${
              deleteButton
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className=" w-[300px] lg:w-[600px]   text-center bg-[#10172a] rounded-2xl py-6 px-4">
              {" "}
              <h2 className="text-2xl  xl:text-2xl font-bold mb-8 text-[#2563eb] text-center">
                ARE YOU SURE U WANT TO DELETE YOUR DATA <br />
                <span className="text-red-500 text-xl">
                  YOU WONT BE ABLE TO RETRIVE YOUR DATA
                </span>
              </h2>
              <div className="flex space-x-3 justify-center items-center">
                <button
                  className=" py-3 px-6 md:text-xl cursor-pointer rounded font-medium md:font-bold tracking-all duration-200 bg-[#0891b2] text-[#cbd5e1] hover:text-red-500  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10"
                  onClick={deleteAccount}
                >
                  Delete
                </button>
                <button
                  className=" py-3 px-6 md:text-xl cursor-pointer rounded font-medium md:font-bold tracking-all duration-200 bg-[#0891b2] text-[#cbd5e1] hover:text-stone-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_ rgba(128, 128, 128, 0.5)] hover:bg-gray-500/10"
                  onClick={() => setDeleteButton(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
