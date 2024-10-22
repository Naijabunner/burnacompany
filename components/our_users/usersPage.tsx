import Image from 'next/image'
import React from 'react'

const UsersPage = () => {
  return (
    <section className=' min-h-[600px] p-10 '>
      <h5 className=' pb-20 text-3xl md:text-5xl font-medium text-center'>
      See what our trusted users Say
      </h5>
      <main className='flex justify-center gap-10 items-center'>
        <div className=' bg-[#5d5cba] shadow-xl w-full h-full min-h-[250px] py-10 text-white flex flex-col justify-center gap-y-8 max-w-[350px] max-md:px-10 md:pl-8 rounded-2xl '>
          {/* <Image /> */}
                <div className=" bg-white h-12 w-12 rounded-full"></div>
          <p className=' max-w-[300px] leading-[30px] text-sm font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repudiandae distinctio doloribus minus placeat ad mollitia
            dignissimos accusamus eum porro?
          </p>

          <div className="bottom leading-relaxed text-base font-bold">
            <p className=' '>
                LAstname firstnaem
            </p>
            <p className='opacity-75 font-normal' >
                Frontend dev, fuziondot
            </p>
          </div>
        </div>
        <div className=' bg-[#5d5cba] shadow-xl w-full h-full min-h-[250px] py-10 text-white flex flex-col justify-center gap-y-8 max-w-[350px] max-md:px-10 md:pl-8 rounded-2xl '>
          {/* <Image /> */}
                <div className=" bg-white h-12 w-12 rounded-full"></div>
          <p className=' max-w-[300px] leading-[30px] text-sm font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repudiandae distinctio doloribus minus placeat ad mollitia
            dignissimos accusamus eum porro?
          </p>

          <div className="bottom leading-relaxed text-base font-bold">
            <p className=' '>
                LAstname firstnaem
            </p>
            <p className='opacity-75 font-normal' >
                Frontend dev, fuziondot
            </p>
          </div>
        </div>
        <div className=' bg-[#5d5cba] shadow-xl w-full h-full min-h-[250px] py-10 text-white flex flex-col justify-center gap-y-8 max-w-[350px] max-md:px-10 md:pl-8 rounded-2xl '>
          {/* <Image /> */}
                <div className=" bg-white h-12 w-12 rounded-full"></div>
          <p className=' max-w-[300px] leading-[30px] text-sm font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repudiandae distinctio doloribus minus placeat ad mollitia
            dignissimos accusamus eum porro?
          </p>

          <div className="bottom leading-relaxed text-base font-bold">
            <p className=' '>
                LAstname firstnaem
            </p>
            <p className='opacity-75 font-normal' >
                Frontend dev, fuziondot
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default UsersPage