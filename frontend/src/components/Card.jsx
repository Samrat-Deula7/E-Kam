import User from "../assets/User.png"

const Card = () => {
  return (
    <div className="flex flex-col items-center  bg-stone-600 h-80 w-80 rounded-2xl px-4 py-3 mb-5 ml-3 mr-3">
      {/* This is div 1 */}
      <div className="grid grid-cols-2  mb-3">
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
          <h3>Samrat Deula</h3>
          <h3>Phone no: 98432442</h3>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
      {/* This is div 2 */}
      <div className="bg-[#181C14] rounded-full p-2 w-auto mb-3">
        <h3 className="text-gray-400 ">Plumber</h3>
      </div>
      {/* This is div 3 */}
      <div className="text-gray-400">
        <h3>Experience: 3 years</h3>
        <h3>Cost: 1000 - 4000</h3>
      </div>
    </div>
  );
};

export default Card;
