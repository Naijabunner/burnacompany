import React from "react";
import testImage from '@/Assets/testimage.webp'
import Image from "next/image";
const BlogDisplaycarousel = () => {
  return (
    <div className=" col-span-2 rounded-3xl overflow-hidden w-full h-[300px] md:h-[400px] mx-auto bg-gradient-to-r from-slate-950 to-slate-800">
        <Image
    src={testImage}
    alt=''
    className='h-full w-full   object-cover opacity-75 '
   
    />
    </div>
  );
};

export default BlogDisplaycarousel;
