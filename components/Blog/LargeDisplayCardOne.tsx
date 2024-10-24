import React from 'react'
import testImage from '@/Assets/testimage.webp'
import Image from 'next/image'
import CategoryIndicator from './categoryIndicator'

const LargeDisplayCardOne = () => {
  return (
    <div className="cardOne  rounded-xl p-2 px-4 gap-x-5 flex flex-col bg-white  max-md:grid max-md:grid-cols-[35%,62%] cardOne h-full sm:min-h-[180px]">
      
    <div className=" md:h-[200px] w-full rounded-lg overflow-hidden">
    <Image
    src={testImage}
    alt=''
    className='h-full w-full  object-cover '
   
    />
    </div>
    <div className=" py-2 md:py-8 flex flex-col justify-center gap-y-3 md:gap-y-5 sm:text-sm md:text-base">
      <CategoryIndicator category='Advert'/>
      <p className='mr-2 font-semibold leading-relaxed text-lg md:text-2xl  '>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <p className='mr-2 max-md:hidden font-medium opacity-70 leading-relaxed text-sm line-clamp-3 '>
        Lorem ipsum dolor sit amet consectetur adipisicing.
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <p className='pr-2  w-full flex-wrap text-xs  flex justify-between items-center text-gray-400'>
        <span className=' font-semibold'>
          Jane Smith
          </span>
            <span>
           May 15, 2021 2 min
            </span>
      </p>
    </div>
  </div>
  )
}

export default LargeDisplayCardOne