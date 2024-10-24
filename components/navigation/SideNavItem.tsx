'use client'
import Link from "next/link"
import { navs } from "../navbar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function SideNavItem({ item }: { item: navs }) {
    const [dropDown, setdropDown] = useState(false)
  if (item.href) {
    return (
      <Link
        href={item.href}
        className=' font-semibold  flex h-11 justify-between items-center border-b'
      >
        {item.title}
      </Link>
    );
  }

  return (
    <>
      <div className='relative '>
        <button onClick={()=>setdropDown(prev => !prev)} className=' font-semibold w-full  flex h-11 justify-between items-center border-b'>
          {item.title}
          <ChevronDown className={`${dropDown?'':' -rotate-90'} transition-all ease-linear w-5 h-5 absolute right-5`} />
        </button>
        <div className={` origin-top overflow-hidden ${dropDown?"max-h-fit scale-y-100 " :"max-h-0 scale-y-0"} transition-all ease-in-out  w-[90%] mx-auto -right-[80%]`} >
          {item.items?.map((sub) => {
            return (
              <Link
                key={sub.title}
                href={sub.href}
                className=' font-semibold  text-sm flex h-11 justify-between items-center border-b'
              >
                {sub.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}