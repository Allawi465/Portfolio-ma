'use client';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import slides from './slides';
import Image from 'next/image';
import { ImGithub } from 'react-icons/im';
import { FiExternalLink } from 'react-icons/fi';

const MySlider = () => {
  const slideData = slides();
  return (
    <Swiper
      slidesPerView={'auto'}
      navigation
      grabCursor={true}
      pagination={{
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      centeredSlides={true}
      initialSlide={1}
      effect={'coverflow'}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className="shadow-sm rounded-lg relative">
          <Image
            src={slide.image}
            alt={slide.title}
            className="rounded-t-lg object-cover w-full"
          />
          <div className="p-4 font-normal flex flex-col w-full">
            <div className="my-2">
              <h3 className="text-white text-[20px]/[20px] font-medium tracking-tight mb-3">
                {slide.title}
              </h3>
              <p className="text-gray-400 text-[16px]/[20px] my-2">
                {slide.description}
              </p>
            </div>
            <div className="flex justify-between items-center py-3 text-white">
              <a href={slide.githubLink}>
                <ImGithub size={25} />
              </a>
              <a
                className="text-sky-400 flex items-center"
                href={slide.liveSiteLink}
              >
                Demo
                <FiExternalLink className="ml-1 mb-1" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySlider;
