import { ArrowRight } from 'lucide-react';
import React from 'react'

const Hero = () => {
  return (
    <section className=' max-w-screen-2xl mx-auto max-md:px-10 flex justify-center items-center  h-screen max-h-[650px]'>
      <div className="hero w-full max-w-[1200px] mx-auto  grid lg:grid-cols-[45%,51%] gap-10">
 <div className='text max-w-[640px] mx-auto space-y-5 '>
        <h1 className=' text-6xl font-semibold leading-[60px]'>Boost your website Camping with10x SEO Data</h1>
        <p className=' font-medium text-xl opacity-75'>Your Full Stack digital marketing expirience in one place.</p>

        <div className='btns flex flex-col justify-center items-center gap-5 pt-5 '>
          <div className="input_container h-14 px-7  w-full rounded-full border border-black bg-white">
          <input type='text' placeholder='Enter domain, Keywork, Url' className='text-xl font-light flex-1 w-full h-full outline-none bg-transparent' />
          </div>
          <button className='flex justify-center items-center bg-foreground text-white flex-1 w-full  py-5 px-2 rounded-full'>
            Get started <ArrowRight />
          </button>
          <p>Get your web analysis in minutes</p>
        </div>

        <div className='banner'></div>
      </div>

      <div className='grid grid-rows-[77%,20%] gap-3'>
        <div className=' bg-slate-500 ' />
        <div className='grid grid-cols-3 gap-3'>
          <div className=' bg-slate-500 '/>
          <div className=' bg-slate-500 '/>
          <div className=' bg-slate-500 '/>
        </div>
      </div>
      </div>
     
    </section>
  );
}

export default Hero