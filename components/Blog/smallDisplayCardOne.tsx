import React from 'react'
import testImage from '@/Assets/testimage.webp'
import Image from 'next/image'
import CategoryIndicator from './categoryIndicator'

const SmallDisplayCardOne = () => {
  return (
    <div className="cardOne max-sm:col-span-2 rounded-xl p-2 px-4 gap-x-5 bg-white border-l-4 border-l-primary grid grid-cols-[35%,62%] cardOne h-full min-h-[180px]">
      
    <div className=" h-full w-full rounded-lg overflow-hidden">
    <Image
    src={testImage}
    alt=''
    className='h-full w-full  object-cover '
   
    />
    </div>
    <div className=" flex flex-col justify-center gap-y-3 sm:text-xs md:text-sm">
      <CategoryIndicator category='Advert'/>
      <p className='mr-2 font-semibold leading-relaxed text-base '>
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

export default SmallDisplayCardOne