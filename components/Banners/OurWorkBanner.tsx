import Image from "next/image";
import React from "react";
import background_vector from "@/assets/Element.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const OurWorkBanner = () => {
  return (
    <div className='overflow-hidden   bg-primary w-full py-10 h-[500px] '>
      <div className='wrapper relative  h-full max max-w-screen-2xl mx-auto'>
        <Image
          src={background_vector}
          alt='background vector'
          className='w-full absolute top-0  z-0 '
        />
        <main className='relative gap-y-10 max-w-[1200px] text-white text-center mx-auto z-10 flex flex-col justify-center items-center h-full max-lg:px-[5%] px-10 '>
          <h4 className=' text-5xl font-semibold'>
            Your work, everywhere you are
          </h4>
          <p className=' text-lg font-medium leading-relaxed'>
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          <Button
            size={"lg"}
            className='text-lg font-semibold bg-white text-primary gap-x-3 w-fit'
          >
            Try Fuziondot
            <ArrowRight />
          </Button>
        </main>
      </div>
    </div>
  );
};

export default OurWorkBanner;
