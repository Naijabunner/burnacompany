"use client"
import React, { useState } from "react";
import Image from "next/image";
import { blogs } from "@/lib/blog.data";
import { ChevronLeft, ChevronRight } from "lucide-react";
const BlogDisplaycarousel = () => {
  const [imageIndex, setimageIndex] = useState(0)

  return (
    <div className=' relative col-span-2 rounded-3xl overflow-hidden w-full bg-black h-[300px] md:h-[400px] mx-auto '>
      <Image
        src={blogs[imageIndex].coverPhoto}
        alt=''
        width={300}
        height={300}
        className='h-full w-full absolute  object-cover opacity-65 z-0'
      />
      <div className=' w-full h-full z-0 absolute bg-gradient-to-r from-slate-900 to-transparent opacity-40' />
      <div className='relative h-full flex justify-center items-center'>
        <div className="text max-w-screen-sm space-y-9 mx-auto text-white">
          <h2 className=" text-4xl md:text-5xl leading-[40px] md:leading-[60px] font-semibold">
          {blogs[imageIndex].title}
          </h2>
          <p className="">
            {
              blogs[imageIndex].authour
            } <br />
            {
              blogs[imageIndex].date
            }
          </p>

          <div className="chevbtns">

          </div>
          <div className=" flex jus">
             <ChevronLeft
          className='relative cursor-pointer z-30 text-white  h-10 w-10 p-1 rounded-full stroke-slate-400  bg-white '
          onClick={() => {
            setimageIndex(1);
          }}
        />
             <ChevronRight
          className='relative cursor-pointer z-30 text-white  h-10 w-10 p-1 rounded-full stroke-slate-400  bg-white '
          onClick={() => {
            setimageIndex(1);
          }}
        />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BlogDisplaycarousel;
