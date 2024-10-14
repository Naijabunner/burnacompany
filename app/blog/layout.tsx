import { Button } from "@/components/ui/button";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className=' mb-10 max-w-screen-2xl mx-auto px-20 py-5 flex justify-between items-center'>
        <div className="left flex gap-5">
            
           {/* <h1 className=" font-semibold text-2xl text-primary">Our Blog</h1> */}
        <ul className=" flex justify-between items-end  gap-x-3 font-semibold text-base">
          <li 
          className={`  text-base border cursor-pointer  rounded-full py-2  px-3  flex justify-center`}

          >CAtegory</li>
          <li 
          className={`  text-base border cursor-pointer  rounded-full py-2  px-3  flex justify-center`}

          >CAtegory</li>
          <li 
          className={`  text-base border cursor-pointer  rounded-full py-2  px-3  flex justify-center`}

          >CAtegory</li>
          <li 
          className={`  text-base border cursor-pointer  rounded-full py-2  px-3  flex justify-center`}

          >CAtegory</li>
        </ul>   
        </div>
      

        <Button size={"sm"} className="  border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">Publish a blog</Button>
      </div>
      {children}
    </div>
  );
};

export default layout;
