"use client"
import React, { useState } from "react";
import Image from "next/image";
import { blogs } from "@/lib/blog.data";
import { ChevronLeft } from "lucide-react";
const BlogDisplaycarousel = () => {
  const [imageIndex, setimageIndex] = useState(0)

  return (
    <div className=" relative col-span-2 rounded-3xl overflow-hidden w-full bg-black h-[300px] md:h-[400px] mx-auto ">
        <Image
    src={blogs[imageIndex].coverPhoto}
    alt=''
    width={300}
    height={300}
    className='h-full w-full absolute  object-cover opacity-65 z-0'
   
    />
    <div className=" w-full h-full z-0  absolute bg-gradient-to-r from-blue-500 to-transparent opacity-40"/>
     <div className="relative">



      <ChevronLeft className="relative cursor-pointer z-30 " onClick={()=>{setimageIndex(1)}}/>
     </div>
    </div>
  );
};

export default BlogDisplaycarousel;
