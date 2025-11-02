import ContractorContext from "./ContractorContext";


const ContractorState = (props) => {
      const host = "http://localhost:3000";

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
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
      };

      // Delete Data
      const deleteData = async (id) => {
        const token=localStorage.getItem("token")
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
          }
          else{
            alert("Coundn't delete your data")
          }
         
        } catch (error) {
          console.error(error.message);
        }
        
      };



  return (
    <ContractorContext.Provider value={{ deleteData,  getData }}>
      {props.children}
    </ContractorContext.Provider>
  );
};
export default ContractorState;
