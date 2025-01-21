import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const InstagramCarousel = () => {
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      setSlidePercentage(window.innerWidth <= 768 ? 100 : 33.33);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    switch (index) {
      case 0:
        window.open("https://www.instagram.com/p/CdK-hP2Jcfq/", "_blank");
        break;
      case 1:
        window.open("https://www.instagram.com/reel/CcC9tI7r23Y/", "_blank");
        break;
      case 2:
        window.open("https://www.instagram.com/p/Cc49ilTv_hy/", "_blank");
        break;
      case 3:
        window.open("https://www.instagram.com/reel/CcSMLbhNAaK/", "_blank");
        break;
      case 4:
        window.open("https://www.instagram.com/p/CckCx1RtT6o/", "_blank");
        break;
    }
  };
  return (
    <Carousel
      className=" w-5/6 lg:w-2/3 xl:w-3/5 mt-10 flex items-center select-none"
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={true}
      centerMode={true}
      centerSlidePercentage={slidePercentage}
      showStatus={false}
      emulateTouch={true}
      onClickItem={(index) => handleClick(index)}
      renderArrowPrev={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 left-5 flex justify-center items-center p-3 opacity-100 hover:opacity-80 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="xl" color="white"/>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-5 flex justify-center items-center p-3 opacity-100 hover:opacity-80 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faChevronRight} size="xl" color="white"/>
          </div>
        );
      }}
    >
      <div className="instagram-item ">
        <Image width={1080} height={1080} className='rounded-lg' src="/Instagram/Témoignage Julien K.webp" alt="Témoignage de Julien K"/>
      </div>
      <div className="instagram-item ">
        <Image width={1080} height={1080} className='rounded-lg'src="/Instagram/Témoignage Emma A.webp" alt="Témoignage de Emma A"/>
      </div>
      <div className="instagram-item ">
        <Image width={1080} height={1080} className='rounded-lg' src="/Instagram/Témoignage Lucas R.webp" alt="Témoignage de Lucas R"/>
      </div>
      <div className="instagram-item ">
        <Image width={1080} height={1080} className='rounded-lg' src="/Instagram/Témoignage Nicolas G.webp" alt="Témoignage de Nicolas G"/>
      </div>
      <div className="instagram-item ">
        <Image width={1080} height={1080} className='rounded-lg' src="/Instagram/Témoignage Vincent C.webp" alt="Témoignage de Vincent C"/>
      </div>
    </Carousel>
  );
};

export default InstagramCarousel;
