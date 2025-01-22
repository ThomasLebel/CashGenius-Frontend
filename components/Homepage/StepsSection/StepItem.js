const StepItem = ({number, title, description}) => {
  return (
    <div className="h-1/4 mt-10 w-5/6 flex flex-col items-start justify-start lg:w-1/4">
      <div className="relative">
      <span className='w-5 h-5 bg-mainColor absolute top-1/2 left-1/2 -mt-[10px] -ml-[7px] rounded-full border-4 border-white drop-shadow-xl'></span>  
      <span className="text-7xl font-medium text-[#dedcdd]">{number}</span>
      </div>
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm font-light text-secondaryColor">
        {description}
      </p>
    </div>
  );
};

export default StepItem;
