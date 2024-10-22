import { Button } from "@/components/ui/button";
import React from "react";
import background_vector from "@/assets/Element.png";
import Image from "next/image";
const layout = ({ children }) => {

  const categories=[
    {
      label:'Digital marketing',
      value:'Digital',
    },
    {
      label:'SEO',
      value:'SEO',
    },
    {
      label:'Content management',
      value:'Content_mgt',
    },
    {
      label:'Tips',
      value:'Tips',
    }
  ]
  return (
    <div>
      <header className=' relative mb-5 py-5 md:py-10 overflow-hidden flex flex-col justify-center items-center gap-5 border-b max-w-[1400px] mx-auto'>
        <h1 className=' text-6xl font-semibold'>
          Fuziondot <span className=' text-primary'>Blog</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
          nihil?
        </p>
        <div className=' flex gap-5'>
          {/* <h1 className=" font-semibold text-2xl text-primary">Our Blog</h1> */}
          <ul className=' flex justify-center items-center w-full flex-wrap  gap-5 font-semibold text-sm'>
            {categories.map((category) => {
              return (
                <li
                  key={category.value}
                  className={` text-xs md:text-sm border cursor-pointer  rounded-full min-h-9 min-w-36 px-5 flex justify-center items-center`}
                >
                  {category.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='tags flex justify-center items-center gap-2 text-sm font-semibold text-primary '>
          Tags:
          <ul className=' flex justify-center items-center gap-3 text-sm'>
            <li>Popular</li>
            <li>Recent</li>
            <li>Trending</li>
          </ul>
        </div>
       
      </header>

      {/* <div className=' mb-10 max-w-screen-2xl mx-auto px-20 py-5 flex justify-between items-center'>
       
      </div> */}
      {children}
    </div>
  );
};

export default layout;
