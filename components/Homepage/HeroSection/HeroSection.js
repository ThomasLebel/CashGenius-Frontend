import Button from "../../Shared/Button";

const HeroSection = () => {
  return (
    <section
      className=" h-[110vh] flex flex-col justify-center  w-screen relative xl:overflow-hidden xl:pt-48"
      style={{
        backgroundImage: `url(/background_image.webp)`,
        backgroundPosition: "right 35% bottom 40%",
        backgroundSize: "cover",
      }}
    >
      <div className="w-4/5 pt-32 xl:pt-0 ml-10 lg:ml-48 md:w-2/6">
        <h2 className="font-bold text-base text-white mb-4">COMME PIERRE</h2>
        <h1 className="font-bold text-3xl lg:text-5xl text-white">
          Gagne jusqu'à 400€ grâce aux bonus des plus grands sites de paris
          sportifs.
        </h1>
        <div className="mb-28 mt-10">
        <Button name="JE M'INSCRIS AU GENIUS PROGRAMME" bgColor="bg-white" textColor="text-mainColor"></Button>
        </div>
        <div
          className="absolute -bottom-2 left-0 min-h-[80px] w-screen"
          style={{
            backgroundImage: `url(/wave.png)`,
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
