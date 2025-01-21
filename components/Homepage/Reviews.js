import InstagramCarousel from "./InstagramCarousel";

const Reviews = () => {
  return (
    <section className=" bg-backgroundColor">
      <div className="flex flex-col items-center pt-20 ">
        <h1 className="font-bold text-2xl text-center md:text-4xl w-3/4">
          ILS TÉMOIGNENT POUR VOUS 🎥

        </h1>
        <p className="text-secondaryColor font-light text-sm mt-5 text-center px-10 md:text-lg">
          <span className="font-bold">Clique sur les miniatures</span> pour voir les témoignages vidéo.
        </p>
        <InstagramCarousel/>
      </div>
      
    </section>
  );
};

export default Reviews;
