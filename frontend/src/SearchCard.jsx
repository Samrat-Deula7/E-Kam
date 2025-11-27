import User from "./assets/User.png";
import { BackgroundGradient } from "../src/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";

const SearchCard = ({ Data }) => {
  return (
    <div>
      <BackgroundGradient className="h-84  w-66 md:w-116 rounded-2xl ">
        <div className="flex flex-col  items-center bg-[#10172a] h-80 w-65 md:w-115 rounded-2xl px-4 py-3 mb-5 ml-6 overflow-wrap break-word border border-gray-700 duration-200 transform hover:-translate-y-1 hover:border-none">
          {/* This is div 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2  mb-3  break-words whitespace-normal w-full">
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
              <h3>
                Name:
                <span className=" text-[#3b82f6] font-extrabold">
                  {Data.name}
                </span>
              </h3>
              <h3>Phone-no:{Data.phoneno}</h3>
              <p>Email:{Data.email}</p>
            </div>
          </div>
          {/* This is div 2 */}
          <div className="bg-[#020617CC] rounded-full p-2 w-auto mb-3 duration-200 transform hover:-translate-y-1 cursor-pointer ">
            <h3 className="text-[#06b6d4] hover:text-[#0891b2]">{Data.work}</h3>
          </div>
          {/* This is div 3 */}
          <div className="text-gray-400">
            <h3>Experience:{Data.experience}</h3>
            <h3>Cost:{Data.cost}</h3>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default SearchCard;
