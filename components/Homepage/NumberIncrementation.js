import AnimatedNumber from "animated-number-react";
import { forwardRef } from "react";

const NumberIncrementation = forwardRef(({ inView, value, dataType, dataName, noBorder }, ref) => {
  return (
    <div className={`flex flex-col items-center w-screen h-1/5 my-5 lg:w-1/3 ${!noBorder && "lg:border-r-2"}`}>
      <span className="text-6xl font-semibold text-mainColor" ref={ref}>
        {inView && (
          <AnimatedNumber
            value={value}
            formatValue={(value) => value.toFixed(0)}
            duration={2500}
          />
        )}
        <span className="text-2xl"> {dataType}</span>
      </span>
      <span className="text-secondaryColor text-sm">{dataName}</span>
    </div>
  );
});

export default NumberIncrementation;
