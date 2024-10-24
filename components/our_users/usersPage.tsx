"use client";
// import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { AvatarIcon } from "@radix-ui/react-icons";

const customerReviews = [
  {
    profilePhoto: "",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae distinctio doloribus minus placeat ad mollitia  dignissimos accusamus eum porro?",
    lastName: "LAstname",
    firstName: "firstnaem",
    moreInfo: "Frontend dev, fuziondot",
  },
  {
    profilePhoto: "",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae distinctio doloribus minus placeat ad mollitia  dignissimos accusamus eum porro?",
    lastName: "LAstname",
    firstName: "firstnaem",
    moreInfo: "Frontend dev, fuziondot",
  },
  {
    profilePhoto: "",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae distinctio doloribus minus placeat ad mollitia  dignissimos accusamus eum porro?",
    lastName: "LAstname",
    firstName: "firstnaem",
    moreInfo: "Frontend dev, fuziondot",
  },
];
const UsersPage = () => {
  return (
    <section className=' min-h-[600px] px-5  !py-36 sm:p-10 bg-slate-700'>
      <h5 className=' pb-10 text-3xl md:text-5xl font-semibold text-center text-white'>
        See what our <span className=' strike relative z-50 '>trusted</span>{" "}
        users Say
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
        className='mySwiper max-w-[1200px] flex '
      >
        {customerReviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=' bg-[#5d5cba] shadow-xl w-full h-full min-h-[250px] py-10 text-white flex flex-col justify-center gap-y-8 max-w-[350px] mx-auto max-md:px-10 md:pl-8 rounded-2xl '>
                {/* <Image /> */}
                <div className='  h-12 w-12 rounded-full'>
                  <AvatarIcon className=' w-full h-full' />
                </div>
                <p className=' max-w-[300px] leading-[30px] text-sm font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum repudiandae distinctio doloribus minus placeat ad
                  mollitia dignissimos accusamus eum porro?
                </p>

                <div className='bottom leading-relaxed text-base font-bold'>
                  <p className=' '>LAstname firstnaem</p>
                  <p className='opacity-75 font-normal'>
                    Frontend dev, fuziondot
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default UsersPage;
