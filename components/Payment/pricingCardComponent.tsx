import React from 'react'
import Pricing_card from './pricing_card'

const PricingCardComponent = () => {
  return (
    <section className='relative py-10 md:py-32 lg:max-w-[1100px] mx-[10%] md:mx-auto'>
             {/* <div className='absolute -top-5 -left-10 w-[30rem] h-[30rem] rounded-full blur-3xl shadow-lg bg-primary opacity-30 mix-blend-multiply z-0'></div>
             <div className='absolute -bottom-5 -right-10 w-[30rem] h-[30rem] rounded-full blur-3xl shadow-lg bg-primary opacity-30 mix-blend-multiply z-0'></div> */}
      <h5 className=' text-center py-5 mb-10 text-3xl md:text-5xl font-semibold'>
      Choose The Best Package For SEOCamping
      </h5>
      <div className='flex justify-center gap-10 items-center flex-wrap'>
        <Pricing_card />
        <Pricing_card />
        <Pricing_card />
      </div>
    </section>
  );
}

export default PricingCardComponent