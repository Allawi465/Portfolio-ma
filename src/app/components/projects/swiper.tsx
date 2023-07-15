'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ImGithub } from 'react-icons/im';
import { FiExternalLink } from 'react-icons/fi';
import { slides } from './slides';

const MySlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      navigation
      pagination={{ clickable: true }}
    >
      {' '}
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-card">
            <div className="sm:w-[380px] cursor-grab">
              <div className="shadow-lg rounded-lg h-full flex flex-col">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full rounded-t-lg"
                  style={{ objectFit: 'cover' }}
                />
                <div className="flex-grow p-4">
                  <div className="grow">
                    <h3 className="text-white text-base font-medium tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-slate-400 mt-2 text-sm">
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
                      Live site
                      <FiExternalLink className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySlider;
