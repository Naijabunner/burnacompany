import React from "react";
import LargeDisplayCardOne from "./LargeDisplayCardOne";
import { Button } from "../ui/button";

const DisplayLayoutTwo = () => {
  return (
    <section className=" py-10">
      <div className=' flex justify-between items-center relative pl-5 md:pl-10 mb-10'>
        <div className='linee absolute left-0 top-0 h-full w-1 bg-purple-300' />
        <p>Categoryyy</p>
        <Button size={'sm'} className=" text-xs  ">View More</Button>
      </div>
      <div className=' md:grid grid-cols-3 gap-7 max-md:space-y-7 justify-between items-center'>
        <LargeDisplayCardOne />
        <LargeDisplayCardOne />
        <LargeDisplayCardOne />
        <LargeDisplayCardOne />
      </div>
    </section>
  );
};

export default DisplayLayoutTwo;
