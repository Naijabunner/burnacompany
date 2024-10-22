import BannerCarousel from "@/components/BannerCarousel/bannerCarousel";
import OurWorkBanner from "@/components/Banners/OurWorkBanner";
import Active_customers from "@/components/Hero/active_customers";
import Hero from "@/components/Hero/hero";
import Newletter from "@/components/Newsletter/newletter";
import UsersPage from "@/components/our_users/usersPage";
import PricingCardComponent from "@/components/Payment/pricingCardComponent";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerCarousel />
      <PricingCardComponent />
      <OurWorkBanner/>
      <Active_customers />
      <UsersPage />
      <Newletter />
    </>
  );
}
