import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';


const InstagramCarousel = () => {
  const [slidesNumber, setSlideNumber] = useState(3);

  useEffect(() => {
      const handleResize = () => {
        setSlideNumber(window.innerWidth <= 768 ? 1.3 : 2.84);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const slides = [
    { src: '/Instagram/Témoignage Julien K.webp', alt: 'Témoignage de Julien K', href: 'https://www.instagram.com/p/CdK-hP2Jcfq/'},
    { src: '/Instagram/Témoignage Emma A.webp', alt: 'Témoignage de Emma A', href: 'https://www.instagram.com/reel/CcC9tI7r23Y/' },
    { src: '/Instagram/Témoignage Lucas R.webp', alt: 'Témoignage de Lucas R', href: 'https://www.instagram.com/p/Cc49ilTv_hy/' },
    { src: '/Instagram/Témoignage Nicolas G.webp', alt: 'Témoignage de Nicolas G', href: 'https://www.instagram.com/reel/CcSMLbhNAaK/' },
    { src: '/Instagram/Témoignage Vincent C.webp', alt: 'Témoignage de Vincent C', href: 'https://www.instagram.com/p/CckCx1RtT6o/' },
  ];

  return (
    <div className="w-5/6 lg:w-2/3 xl:w-3/5 mt-10 select-none">
      <Swiper
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={slidesNumber}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <a href={slide.href} target='_blank' className='hover:opacity-85'>
            <Image
              width={1080}
              height={1080}
              className="rounded-lg"
              src={slide.src}
              alt={slide.alt}
            />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default InstagramCarousel;
