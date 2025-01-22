import InstagramCarousel from "./InstagramCarousel";
import ReviewCarousel from "./ReviewCarousel";
import Button from "../../Shared/Button";

const Reviews = () => {
  return (
    <section>
      <div className="flex flex-col items-center pt-20">
        <h1 className="font-bold text-2xl text-center md:text-4xl w-3/4">
          ILS TÉMOIGNENT POUR VOUS 🎥
        </h1>
        <p className="text-secondaryColor font-light text-sm mt-5 text-center px-10 md:text-lg">
          <span className="font-bold">Clique sur les miniatures</span> pour voir
          les témoignages vidéo.
        </p>
        <InstagramCarousel />
        <h1 className="mt-28 font-bold text-2xl text-center md:text-4xl w-3/4">
          Comme Pierre, Tom, Nathalie 🥰
        </h1>
        <p className="text-secondaryColor font-light text-sm mt-5 text-center px-10 md:text-lg">
         Toi aussi profites de cette opportunité et rejoins
          dès maintenant le <span className="font-bold">GENIUS PROGRAMME.</span>
        </p>
        <ReviewCarousel />
        <div className="mt-5"> 
        <Button name="JE M'INSCRIS AU GENIUS PROGRAMME"></Button>
        </div>
        <div
          className="-bottom-2 left-0 min-h-[80px] w-screen mt-20"
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

export default Reviews;
