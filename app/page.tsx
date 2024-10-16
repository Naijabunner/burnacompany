import BannerCarousel from "@/components/BannerCarousel/bannerCarousel";
import Active_customers from "@/components/Hero/active_customers";
import Hero from "@/components/Hero/hero";
import PricingCardComponent from "@/components/Payment/pricingCardComponent";
// import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Active_customers/>
  <BannerCarousel/>
  <PricingCardComponent/>
  
  <div className="section w-full max-w-[1200px] md:mx-auto min-h-[400px] bg-green-400 px-10 ">
    <div className="main">
      <h6>
        Subscribe to our Newsletter
      </h6>
    </div>
  </div>

  </>
  );
}
