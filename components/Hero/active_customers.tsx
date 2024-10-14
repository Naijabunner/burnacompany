"use client";
import React from "react";
const Active_customers = () => {
  return (
    <div className='overflow-hidden py-10'>
      <div
        className={`carousel relative lg:max-w-[1100px] max-md:mx-5 w-full gap-5 md:gap-x-24 mx-auto `}
      >
        {/* <p className="absolute flex  bg-gray-400 flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center">
            100
            <span className={`${styles.carouselItem}  font-extralight text-base md:text-2xl`}>
              Active Customers
            </span>
          </p>
          <p className="absolute flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center">
            50
            <span className={`${styles.carouselItem}  font-extralight text-base md:text-2xl`}>
              Residence
            </span>
          </p>
          <p className="absolute flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center">
            30
            <span className={`${styles.carouselItem}  font-extralight text-base md:text-2xl`}>
              Commercial Enterprise
            </span>
          </p>
          <p className="absolute flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center">
            20
            <span className={`${styles.carouselItem}  font-extralight text-base md:text-2xl`}>
              Industrial Enterprise
            </span>
          </p> */}
        <p
          className={` carouselItem item1 flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center`}
        >
          100
          <span className={` font-extralight text-base md:text-2xl`}>
            Active Customers
          </span>
        </p>
        <p
          className={` carouselItem item2 flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center`}
        >
          50
          <span className={` font-extralight text-base md:text-2xl`}>
            Residence
          </span>
        </p>
        <p
          className={`carouselItem item3 flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center`}
        >
          30
          <span className={`  font-extralight text-base md:text-2xl`}>
            Commercial Enterprise
          </span>
        </p>
        <p
          className={`carouselItem item4 flex flex-col font-[900] gap-y-3 text-xl md:text-4xl items-center justify-center`}
        >
          20
          <span className={`  font-extralight text-base md:text-2xl`}>
            Industrial Enterprise
          </span>
        </p>
      </div>
    </div>
  );
};

export default Active_customers;
