import ClipLoader from "react-spinners/ClipLoader";

const Button = ({ name, loading = false }) => {
  return (
    <div>
      <button className={` bg-[#ce0251] hover:bg-[#ac054a] text-white font-sans font-semibold text-xs p-4 rounded-md border border-white ${loading && "p-[7px] w-32 pointer-events-none"}`}>
        {loading ? <ClipLoader color="white" size={20} /> : name }
      </button>
    </div>
  );
};

export default Button;
