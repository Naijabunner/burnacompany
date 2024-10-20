import React from 'react'
import Pricing_card from './Pricing_card'

const PricingCardComponent = () => {
  return (
    <section className=' py-10 md:py-20 flex justify-center gap-10 items-center flex-wrap lg:max-w-[1100px] mx-[10%] md:mx-auto'>
        <Pricing_card/>
        <Pricing_card/>
        <Pricing_card/>
    </section>
  )
}

export default PricingCardComponent