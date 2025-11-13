import ContractorContext from "./ContractorContext";
import { useState } from "react";

const ContractorState = (props) => {
  const host = "https://e-kam-jp2a.vercel.app";
  const initialData = [];
  const [contractorData, setContractorData] = useState(initialData);
  const allInitialData = [];
  const [allContractorData, setAllContractorData] = useState(allInitialData);

  // Get the contractor details
  const getData = async () => {
    // API Call
    const url = `${host}/api/contractor/fetchdata`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
          "contractor-id": localStorage.getItem("contractorId"),
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      setContractorData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Get the all contractor details
  const getAllData = async () => {
    // API Call
    const url = `${host}/api/contractor/fetchalldata`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setAllContractorData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete Data
  const deleteData = async (id) => {
    const token = localStorage.getItem("token");
    // API Call
    const url = `${host}/api/contractor/deletenote/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.contractor) {
        throw new Error(`Response status: ${response.status}`);
      } else {
        alert("Coundn't delete your data");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ContractorContext.Provider
      value={{
        deleteData,
        getData,
        contractorData,
        getAllData,
        allContractorData,
      }}
    >
      {props.children}
    </ContractorContext.Provider>
  );
};
export default ContractorState;
