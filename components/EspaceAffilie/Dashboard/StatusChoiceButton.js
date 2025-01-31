const StatusChoiceButton = ({
  title,
  statusChoice,
  handleClickStatusButton,
}) => {
  return (
    <>
      <button
        onClick={() => handleClickStatusButton(title)}
        className={`font-medium p-[2px] m-2 rounded-md text-[#ce0251] text-xs w-[80px] border-2 border-[#ce0251] hover:bg-gray-200 ${
            statusChoice === title && "bg-mainColor text-white hover:bg-pink-800"
        }`}
      >
        {title}
      </button>
    </>
  );
};

export default StatusChoiceButton;
