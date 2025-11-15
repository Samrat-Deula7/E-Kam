import User from "../assets/User.png";

const Card = ({ Contractor }) => {
  return (
    <div className="flex flex-col  items-center  bg-stone-600 h-80 w-65 md:w-115 rounded-2xl px-4 py-3 mb-5 ml-3 mr-3 overflow-wrap break-word">
      {/* This is div 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2  mb-3 ">
        <div className="w-23 h-23 md:w-28 md:h-28 lg:w-31 lg:h-31  rounded-full bg-linear-to-r from-stone-600 to-white ">
          <div className="w-full h-full flex justify-center items-center ">
            <img
              src={User}
              alt=""
              className="w-20 h-20 md:w-25 md:h-25 lg:w-28 lg:h-28 bg-blue-600   bg-cover bg-center rounded-full overflow-clip"
            />
          </div>
        </div>
        <div>
          <h3>Name:{Contractor.name}</h3>
          <h3>Phone-no:{Contractor.phoneno}</h3>
          <p>Email:{Contractor.email}</p>
        </div>
      </div>
      {/* This is div 2 */}
      <div className="bg-[#181C14] rounded-full p-2 w-auto mb-3">
        <h3 className="text-gray-400 ">{Contractor.work}</h3>
      </div>
      {/* This is div 3 */}
      <div className="text-gray-400">
        <h3>Experience:{Contractor.emailxperience}</h3>
        <h3>Cost:{Contractor.cost}</h3>
      </div>
    </div>
  );
};

export default Card;
