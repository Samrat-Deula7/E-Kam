import loadingUrl from "./assets/loading.gif"
const Loading = ({ loading }) => {
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center   ${
        loading ? "h-screen  pointer-events-auto" : "h-0  pointer-events-none"
      }`}
    >
      <img
        src={loadingUrl}
        alt="loading"
        className={`rounded-full ${
          loading
            ? "  pointer-events-auto w-10 h-10 md:w-15 md:h-15"
            : "h-0  pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Loading;