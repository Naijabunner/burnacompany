"use client"
// still needs clean up
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
        className='h-full transition-all ease-in-out duration-300 w-full absolute  object-cover opacity-65 z-0'
      />
      <div className=' w-full h-full z-0 absolute bg-gradient-to-r from-slate-900 to-transparent opacity-40' />
      <div className='relative h-full flex justify-center items-center'>
        <div className="text max-w-screen-sm space-y-9 mx-auto text-white pl-7">
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

          <div className=" flex absolute gap-x-3 max-md:bottom-5 max-md:right-[30%] top-10 left-5">
            {
              new Array(3).fill(7).map(( arr,index)=>{
                return(
                  <div key={index} className=" h-3 w-3 rounded-full bg-white "/>
                )
              })
            }
          </div>
          <div className=" max-md:hidden flex justify-center gap-x-5">
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
