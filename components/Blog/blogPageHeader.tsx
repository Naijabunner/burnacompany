import { categories } from "@/lib/data";
import Link from "next/link";
import React from "react";

const BlogPageHeader = () => {
  return (
    <header className=' flex justify-center gap-5 items-center px-2 flex-wrap '>
      {categories.map((category) => {
        return (
          <Link
            href={"/"}
            className='text-slate-500 hover:text-primary  hover:!stroke-primary rounded-lg shadow flex-col hover:scale-[1.05] cursor-pointer transition-all ease-linear py-5 gap-y-5 min-h-14 text-xs sm:text-sm md:text-base font-semibold  bg-white w-32 md:w-60 flex justify-center items-center p-1 text-center'
            key={category.label}
          >
            <category.icon className='h-10 w-10 max-md:hidden' />
            {category.label}
          </Link>
        );
      })}
    </header>
  );
};

export default BlogPageHeader;
