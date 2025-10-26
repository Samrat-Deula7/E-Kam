import Card from "./Card";

const Services=()=>{
return (
  <div className="pt-18 min-h-screen px-8 flex flex-col items-center justify-center w-full">
    <h1 className="font-bold bg-linear-to-r from-stone-600 to-white bg-clip-text text-transparent text-2xl mb-5 md:text-6xl md:mb-7">
      Search for the service you want
    </h1>
    <div className="flex items-center">
      <input
        type="text"
        required
        className="w-full h-12 bg-white/5 border border-white/10 border-r-0 rounded-l-full px-4 py-3 text-white transition focus:outline-none focus:border-gray-600 focus:bg-stone-400/5"
        placeholder="Search"
      />
      <i class="fa-solid fa-magnifying-glass h-12 bg-white/5 border  border-white/10 border-l-0 rounded-r-full  px-8 py-3 "></i>
    </div>

    {/* "max-h-[1000px] overflow-hidden" This tailwind styling in sures that no matter how many cards we have only certain numbers of it will be shown */}
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center mt-6 mx-6 my-3 max-h-[1000px] overflow-hidden">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
}
export default Services;