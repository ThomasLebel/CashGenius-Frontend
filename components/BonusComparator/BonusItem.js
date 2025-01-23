import Image from "next/image";


const BonusItem = ({
  number,
  name,
  title,
  amount,
  type,
  asterisk,
  handleModal,
  videoLink
}) => {
  return (
    <div className="w-[280px]  h-[450px] bg-white mb-4 sm:m-4 rounded-xl flex flex-col justify-around items-center shadow-xl">
      <div className="w-full p-3">
        <h2 className="font-semibold">
          {number} - {name}
        </h2>
      </div>
      <Image
        width={80}
        height={80}
        src={`/LogoSites/${
          name === "PARIONS SPORT" ? "PARIONSSPORT" : name
        }.webp`}
      ></Image>
      <span className="mt-2 font-semibold text-sm text-secondaryColor text-center w-[95%]">
        {title}
      </span>
      <span className="mt-2 font-medium text-sm text-secondaryColor text-center leading-3">
        Jusqu'à
      </span>
      <span className="font-bold text-3xl text-mainColor text-center leading-6">
        {amount}€
      </span>
      <span className="font-medium text-sm text-secondaryColor text-center leading-3">
        en
      </span>
      <span className="font-bold text-2xl pl-2 text-mainColor text-center leading-6">
        {type}*
      </span>
      <div className="w-full flex justify-around mt-3">
        <button
          onClick={() => handleModal(name, title, amount, type, videoLink)}
          className=" bg-white hover:bg-gray-200 text-mainColor border-2 border-mainColor font-sans font-normal text-xs py-2 rounded-md w-28"
        >
          En savoir plus
        </button>
        <button className=" bg-[#ce0251] hover:bg-[#ac054a] text-white font-sans font-normal text-xs rounded-md w-28">
          Profite du bonus
        </button>
      </div>
      <div className="w-full p-3">
        <p className="text-[12px] text-secondaryColor tracking-tighter leading-4">
          {asterisk}
        </p>
      </div>
    </div>
  );
};

export default BonusItem;
