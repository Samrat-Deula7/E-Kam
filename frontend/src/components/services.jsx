import Card from "./Card";
import SearchCard from "../SearchCard";
import ContractorContext from "../../context/ContractorContext";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";

const Services = () => {
  const [query, setQuery] = useState("");
  const [noContractor, setNoContractor] = useState("");
  const initialSearchData = [1, 2, 3]; // 1,2,3 is an temporary data so that the code doesn't run when refreshing
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
    const url = `http://localhost:3000/api/contractor/search:q?q=${query}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result) {
        setSearchData(result);
        setQuery("");
      } else {
        alert("Coundn't retrive data");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

   
  useEffect(() => {
          getAllData();

    console.log("This is the searched data", searchData);
    if (Array.isArray(searchData) && searchData.length === 0) {
      setNoContractor(
        "Contractor not found . You can pick from the contractor available below"
      );
    } else {
      setNoContractor("");
    }
  }, [searchData]);

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

      <div className="text-xl md:text-3xl text-red-500">
        <h4>{noContractor}</h4>
      </div>

      {/* "max-h-[1000px] overflow-hidden" This tailwind styling in sures that no matter how many cards we have only certain numbers of it will be shown */}

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  place-items-center mt-6 mx-6 my-3 ">
        {/* {searchData.length === 0 && (
          <div className="container">Not found</div>
        )} */}
        {searchData.map((Data) => {
          return <SearchCard key={Data._id } Data={Data} />;
        })}

        {allContractorData.map((Contractor) => {
          return <Card key={Contractor._id} Contractor={Contractor} />;
        })}
        {/* 
        {searchData.length === 0
          ? allContractorData.map((Contractor) => (
              <Card key={Contractor._id} Contractor={Contractor} />
            ))
          : searchData.map((Data) => <SearchCard key={Data._id} Data={Data} />)} */}
      </div>
    </div>
  );
};
export default Services;
