const Alert = ({ alert }) => {
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[#020617CC] z-40 flex flex-col items-center justify-center  ${
        alert.msg
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[320px] h-[120px] bg-amber-900 rounded-3xl px-10 py-5">
       { alert.msg}
      </div>
    </div>
  );
};

export default Alert;