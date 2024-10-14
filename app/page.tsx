import BannerCarousel from "@/components/BannerCarousel/bannerCarousel";
import Active_customers from "@/components/Hero/active_customers";
import Hero from "@/components/Hero/hero";
// import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Active_customers/>
  <BannerCarousel/>
  </>
  );
}
