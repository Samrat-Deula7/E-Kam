import Card from "./Card";
import ContractorContext from "../../context/ContractorContext";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

const Services = () => {
  const [query, setQuery] = useState("");
  const initialSearchData = [];
  const [searchData, setSearchData] = useState(initialSearchData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const context = useContext(ContractorContext);
  const { getAllData, allContractorData } = context;
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  // SEARCH Data
  const getSearchData = async () => {
    // API Call
    const url = "http://localhost:3000/api/contractor/search";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          query: query,
        },
      });
      const result = await response.json();
      if (result.ContractorData) {
        setSearchData(result);
      } else {
        alert("Coundn't retrive data");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="pt-18 min-h-screen px-8 flex flex-col items-center justify-center w-full">
      <h1 className="font-bold bg-linear-to-r from-stone-600 to-white bg-clip-text text-transparent text-2xl mb-5 md:text-6xl md:mb-7">
        Search for the service you want
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            required
            className="w-full h-12 bg-white/5 border border-white/10 border-r-0 rounded-l-full px-4 py-3 text-white transition focus:outline-none focus:border-gray-600 focus:bg-stone-400/5"
            placeholder="Search"
            onChange={onChange}
          />
          <button type="submit" onClick={getSearchData}>
            {" "}
            <i className="fa-solid fa-magnifying-glass h-12 bg-white/5 border  border-white/10 border-l-0 rounded-r-full  px-8 py-3 "></i>
          </button>
        </form>
      </div>

      {/* "max-h-[1000px] overflow-hidden" This tailwind styling in sures that no matter how many cards we have only certain numbers of it will be shown */}

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  place-items-center mt-6 mx-6 my-3 max-h-[2000px] overflow-hidden">
        {allContractorData.length === 0 && (
          <div className="container">
            Contracotrs Data will be shown when available
          </div>
        )}
        {allContractorData.map((Contractor) => {
          return <Card key={Contractor._id} Contractor={Contractor} />;
        })}
      </div>
    </div>
  );
};
export default Services;
