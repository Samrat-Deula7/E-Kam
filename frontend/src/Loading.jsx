import loadingUrl from "./assets/loading.gif"
const Loading = ({ loading }) => {
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        loading
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <img
        src={loadingUrl}
        alt="loading"
        className="rounded-full w-10 h-10 md:w-15 md:h-15"
      />
    </div>
  );
};

export default Loading;