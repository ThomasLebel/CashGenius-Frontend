import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import reviews from "../../../Data/reviews"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const ReviewCarousel = () => {
  const [slidesNumber, setSlideNumber] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        setSlideNumber(1);
      } else if (windowWidth <= 1024) {
        setSlideNumber(2);
      } else if (windowWidth <= 1280) {
        setSlideNumber(3);
      } else {
        setSlideNumber(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let starsToShow = [];
  for (let i = 0; i < 5; i++) {
    starsToShow.push(
      <FontAwesomeIcon key={i} icon={faStar} size="sm" color="#FFD700" />
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
                <p className="italic text-base mt-1 text-secondaryColor">
                  {slide.review}
                </p>
              </div>
              <div className=" w-full flex flex-row items-center justify-between p-2">
                <div className=" w-full flex flex-row items-center  p-2">
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full ml-3"
                    src={slide.photo}
                    alt={`Photo de profil de ${slide.name}`}
                  ></Image>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm font-semibold">{slide.name}</span>
                    <span className="text-xs font-light">Avis Facebook</span>
                  </div>
                </div>
                <div className="mr-5">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xl"
                    color='#758092'
                  />
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
