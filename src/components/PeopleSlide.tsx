import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { PEOPLE } from "../constants/people";

import "swiper/css";

export const PeopleSlide = () => {
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  return (
    <div className="pb-40 pt-52 bg-dark text-light flex flex-col gap-8 lg:gap-12 xl:gap-16">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="container w-full h-1/3 flex items-end justify-center relative"
      >
        <p className="font-bold text-6xl xs2:text-7xl lg:text-8xl xl:text-9xl text-center z-10">
          Folks behind CC
        </p>
        <p className="absolute right-16 sm:right-4 md:right-20 lg:right-28 xl:right-28 2xl:right-60 bottom-10 sm:bottom-8 md:bottom-10 xl:bottom-16 -rotate-12 w-16 xl:w-24 aspect-square rounded-full bg-[#FF372A] flex items-center justify-center text-2xl xl:text-3xl font-semibold">
          24
        </p>
      </motion.div>
      <div className="grow space-y-4">
        <Swiper
          slidesPerView={1.25}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setGalleryActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            370: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 2,
            },
            690: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 2.3,
            },
            840: {
              slidesPerView: 2.5,
            },
            940: {
              slidesPerView: 2.7,
            },
            1030: {
              slidesPerView: 2.7,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 2.9,
            },
            1200: {
              slidesPerView: 3.1,
            },
            1300: {
              slidesPerView: 3.3,
            },
            1600: {
              slidesPerView: 3.8,
            },
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          {PEOPLE.map((people, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className={`rounded-2xl overflow-hidden border-2 border-light w-72 md:w-80 xl:w-96 aspect-square bg-red-50 text-dark ${
                  galleryActiveIndex !== index && "opacity-30"
                }`}
              >
                <img
                  src={people.image}
                  alt={people.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="flex items-center justify-center gap-1 text-lg sm:text-xl xl:text-2xl">
            <p className="font-bold">{PEOPLE[galleryActiveIndex].name}</p>
            <p className="text-[#AAAAAA]">{PEOPLE[galleryActiveIndex].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
