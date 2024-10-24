"use client"
import React from 'react'
import Pricing_card from './pricing_card'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules";
const PricingCardComponent = () => {
  return (
    <section className='relative pt-20 pb-32 lg:max-w-[1100px] mx-[5%] md:mx-auto'>
             {/* <div className='absolute -top-5 -left-10 w-[30rem] h-[30rem] rounded-full blur-3xl shadow-lg bg-primary opacity-30 mix-blend-multiply z-0'></div>
             <div className='absolute -bottom-5 -right-10 w-[30rem] h-[30rem] rounded-full blur-3xl shadow-lg bg-primary opacity-30 mix-blend-multiply z-0'></div> */}
      <h5 className=' text-center py-5 mb-10 text-3xl md:text-5xl font-semibold'>
      Choose The Best Package For SEOCamping
      </h5>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1200px] flex "
      >
              <SwiperSlide>
              <Pricing_card />
              </SwiperSlide>
              <SwiperSlide>
              <Pricing_card />
              </SwiperSlide>
              <SwiperSlide>
              <Pricing_card />
              </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default PricingCardComponent