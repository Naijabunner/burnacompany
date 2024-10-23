import React from 'react'
import BlogDisplaycarousel from './blogDisplaycarousel'
import SmallDisplayCardOne from './smallDisplayCardOne'

const DisplayLayoutOne = () => {
  return (
    <div className="max-lg:mx-2   flex gap-5 my-10">
    <div className=" grid sm:grid-cols-2 gap-5  w-full ">
      <BlogDisplaycarousel/>
   <SmallDisplayCardOne/>
   <SmallDisplayCardOne/>
   <SmallDisplayCardOne/>
   <SmallDisplayCardOne/>
    </div>
    <div className=" bg-purple-500 w-[250px] hidden md:block"></div>
    </div>
  )
}

export default DisplayLayoutOne