import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import banner from '@/assets/newsletter_banner.png'
const Newletter = () => {
  return (
    <div className=" overflow-hidden section relative w-full min-h-[300px]  bg-[#9896ff] px-10 flex justify-center items-center ">
    <div className="main z-10 lg:max-w-[1100px] w-full lg:mx-auto max-md:flex-col flex justify-between items-center">
      <h6 className=' text-4xl text-white !leading-[66px] font-semibold max-w-[150px]'>
        Join our Newsletter
      </h6>
      <div className=" flex w-full h-full justify-center flex-col items-end gap-y-4 ">
        <p className=' max-w-[500px] text-white text-base font-medium leading-loose'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus inventore dolorum et veniam praesentium porro magnam esse id officiis exercitationem!

        </p>
         <form className=' flex gap-8 bg-white w-full max-w-[500px] p-2 rounded-full '>
        <input type="text" name="" id="" className=' flex-1 border-none outline-none pl-2 ' />
        <Button className=' bg-primary text-white w-[100px] rounded-full '>
            Subscribe
        </Button>
      </form>
      </div>

    </div>
    <Image
    src={banner}
    alt=''
    // width={500}
    // height={500}
    className='absolute w-full h-[700px] max-w-screen-2xl bg-blend-multiply opacity-80 z-0'
    />
    </div>
  )
}

export default Newletter