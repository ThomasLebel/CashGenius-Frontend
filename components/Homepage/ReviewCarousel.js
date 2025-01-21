import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import reviews from "../../Data/reviews";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import Image from "next/image";

const ReviewCarousel = () => {
  const [slidesNumber, setSlideNumber] = useState(3);

  useEffect(() => {
    const handleResize = () => {
        let windowWidth = window.innerWidth
        if (windowWidth <= 	768){
            setSlideNumber(1)
        } else if (windowWidth <= 1024){
            setSlideNumber(2)
        } else if (windowWidth <= 1280){
            setSlideNumber(3)
        } else {
            setSlideNumber(4)
        }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  let starsToShow = [];
  for (let i = 0; i < 5; i++) {
    starsToShow.push(
      <FontAwesomeIcon icon={faStar} size="sm" color="#FFD700" />
    );
  }

  return (
    <div className="w-[95vw] mt-10 select-none">
      <Swiper
        pagination={true}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={slidesNumber}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="!pb-10"
      >
        {reviews.map((slide, index) => (
          <SwiperSlide key={index} className="flex  shadow-md h-5/6">
              <div className="  min-h-[300px] w-full flex flex-col items-center justify-between bg-white rounded-lg">
                <div className="w-full p-5">
                  {starsToShow}
                  <p className="italic text-base mt-1 text-secondaryColor">{slide.review}</p>
                </div>
                <div className=" w-full flex items-center p-2">
                  <img
                    className="h-10 w-10 bg-red-400 rounded-full ml-3"
                    src={slide.photo}
                  ></img>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm font-semibold">{slide.name}</span>
                    <span className="text-xs font-light">Avis Facebook</span>
                  </div>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
