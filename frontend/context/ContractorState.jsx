import ContractorContext from "./ContractorContext";
import { useState } from "react";

const ContractorState = (props) => {
      const host = "http://localhost:3000";
      const contractorInitial = [];

      const [Datas, setData] = useState(contractorInitial);

     

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
          setData(result);
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
      };

      // Delete Data
      const deleteData = async (id) => {
        // API Call
        const url = `${host}api/contractor/deletenote/${id}`;
        try {
          const response = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
        console.log(`Deleting note with id ${id}`);
        // .filter() has an inbuild loop so it can access each note._id and compare it with the given id.
        const newDatas = Datas.filter((note) => {
          return note._id !== id;
        });
        setData(newDatas);
      };


//       {
//     "name":"SammmmSamSam",
//     "email":"SammmmSam@gmail.com",
//     "password":"000000",
//     "phoneno":9909999845,
//     "experience":"4years",
//     "cost":"1000 to 3000",
//     "work":"web dev1"
// }
      

  return (
    <ContractorContext.Provider value={{ deleteData,  getData }}>
      {props.children}
    </ContractorContext.Provider>
  );
};
export default ContractorState;
