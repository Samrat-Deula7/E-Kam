import { Link } from "react-router-dom";

const Signup = ({ contractorBtn, setcontractorBtn }) => {
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        contractorBtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <form action="">
        <button>Sign up</button>
      </form>
      <Link to="/login" onClick={() => setcontractorBtn(false)}>
        Already got an account ?
      </Link>
    </div>
  );
};

export default Signup;
