const Admin = () => {
  return (
    <div className="  min-h-screen px-8 flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <h1 className="font-bold bg-linear-to-r from-stone-600 to-white bg-clip-text text-transparent text-3xl mb-5 md:text-6xl md:mb-7">
          Welcome Contractor You can Update and Delete your information
        </h1>
        <h3 className="text-2xl md:3xl text-center mb-3 md:mb-4 text-stone-600">
          Your Details
        </h3>
       
      </div>
    </div>
  );
};

export default Admin;
