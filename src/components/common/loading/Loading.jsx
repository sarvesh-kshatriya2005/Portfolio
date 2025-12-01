import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      aria-label="Loading"
    >
      <HashLoader color="#A53DFF" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
