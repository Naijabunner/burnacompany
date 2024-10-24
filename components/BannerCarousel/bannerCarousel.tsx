'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SEObannerImage from "@/assets/BannerCarousel/Banners/SEO.svg";
import CAbannerImage from "@/assets/BannerCarousel/Banners/C-A.svg";
import MRbannerImage from "@/assets/BannerCarousel/Banners/M-R.svg";
import ADbannerImage from "@/assets/BannerCarousel/Banners/ADV.svg";
import SMbannerImage from "@/assets/BannerCarousel/Banners/S-A.svg";
import ASbannerImage from "@/assets/BannerCarousel/Banners/A-S.svg";
import SEO from "@/assets/BannerCarousel/SEO.svg";
import CA from "@/assets/BannerCarousel/CA.svg";
import MR from "@/assets/BannerCarousel/MR.svg";
import AD from "@/assets/BannerCarousel/AD.svg";
import SM from "@/assets/BannerCarousel/SM.svg";
import AS from "@/assets/BannerCarousel/AS.svg";
import { Button } from "../ui/button";



const BannerCarousel = () => {
  const TabsArr = [
    <TabOne key={1} />,
    <TabTwo key={2}/>,
    <TabThree key={3}/>,
    <TabFour key={4}/>,
    <TabFive key={5}/>,
    <TabSix key={6}/>,
  ];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(()=>{
      const timeout= setTimeout(() => {
        if(imageIndex >= 0 && imageIndex < 5){
            setImageIndex(prev => prev + 1)
        }else if(imageIndex === 5){
          setImageIndex(0)
        }
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
  },[imageIndex])

//   const hanan = () => {
//     setImageIndex((index) => {
//       if (index === 0) return TabsArr.length - 1;
//       return index - 1;
//     });
//   };

//   const next = () => {
//     setImageIndex((index) => {
//       if (index === TabsArr.length - 1) return 0;
//       return index + 1;
//     });
//   };

  return (
    <section
      className='bannerSection '
      style={{
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <main
        style={{
          maxWidth: "1150px",
          width: "100%",
          padding: "0px 15px ",
          margin: "auto",
          borderRadius: "30px",
            backgroundColor:"white"
        }}
        className=" mx-10 "
      >
        <div className='carousel_bar text-gray-200 max-sm:hidden   '>
        {/* SEO */}
          <button onClick={()=>setImageIndex(0)} className={`1 ${imageIndex === 0 ? 'text-primary stroke-primary': 'text-gray-500 '} space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center`}>
            <Image src={SEO} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />
            SEO
            <p
              className='line1 ease bg-gray-500 self-end'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>
          <button onClick={()=>setImageIndex(1)} className='2 text-gray-500 space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center'>
          <Image src={CA} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />

            Content Marketing
            <p
              className='line ease bg-gray-500'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>
          <button onClick={()=>setImageIndex(2)} className='3 text-gray-500 space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center'>
          <Image src={MR} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />
            Market Research
            <p
              className='line ease bg-gray-500'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>
          <button onClick={()=>setImageIndex(3)} className='4 text-gray-500 space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center'>
          <Image src={AD} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />
            Advertising
            <p
              className='line ease bg-gray-500'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>
          <button onClick={()=>setImageIndex(4)} className='5 text-gray-500 space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center'>
          <Image src={SM} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />
            Social Media
            <p
              className='line ease bg-gray-500'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>
          <button onClick={()=>setImageIndex(5)} className='6 text-gray-500 space-y-3 text-base text-center font-bold  ease cursor-pointer hover:text-primary flex flex-col justify-center items-center'>
          <Image src={AS} alt="" className="ease hover:grayscale-0 aspect-square w-[50px] cursor-pointer hover:text-primary" />
            Agency Solutions
            <p
              className='line ease bg-gray-500'
              style={{ width: "100%", height: "2px", borderRadius: "50px" }}
            />
          </button>

        </div>
        <div
          className=''
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
          
        >
          {TabsArr.map((tab, index) => {
            return (
              <div
              key={index}
                className=''
                style={{
                  width: "100%",
                  height: "100%",
                  translate: `${-100 * imageIndex}%`,
                  flexShrink: 0,
                  flexGrow: 0,
                  transition: "translate 300ms ease-in-out",
                }}
              >
                {tab}
              </div>
            );
          })}
        </div>
        {/* {TabsArr[imageIndex]} */}
      </main>
    </section>
  );
};

const TabOne = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:justify-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text'>
        <h1>Drive more organic traffic with our user-friendly SEO tools.</h1>
        <ul>
          <li>Discover millions of keywords</li>
          <li>Analyze backlinks</li>
          <li>Conduct SEO audits</li>
          <li>Track SERP rankings daily.</li>
        </ul>
          <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
          Try SEO Toolkit <i className='icon-right-arrow' />
            </Button>
      </div>
      <Image
        src={SEObannerImage}
        className='max-w-[30rem] aspect-square '
        alt='banner'
      />
    </section>
  );
};
const TabTwo = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:items-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text '>
        <h1>Gain a competitive edge with our easy-to-use analysis tools.</h1>
        <ul>
          <li>Analyze competitor content strategies</li>
          <li>SEO techniques</li>
          <li>Distribution channels</li>
          <li>AI usage to identify opportunities for improving your own {"content's"} visibility and reach.</li>
        </ul>
          <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
          Try Competitive Analysis Toolkit <i className='icon-right-arrow' />
            </Button>
      </div>
      <div className=' h-[25rem] w-[30rem] '>
        <Image src={CAbannerImage} className=' aspect-square ' alt='banner' />
      </div>
    </section>
  );
};
const TabThree = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:justify-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text'>
        <h1>Uncover your {"competitors'"} secret sauce for marketing success.</h1>
        <ul>
          <li>Analyze website traffic</li>
          <li>Uncover competitor marketing strategies</li>
          <li>Identify growth opportunities</li>
          <li>Discover keyword and backlink gaps</li>
        </ul>
        <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
        Try Competitive research Toolkit <i className='icon-right-arrow' />
            </Button>
      </div>
      <Image
        src={MRbannerImage}
        className='max-w-[30rem] aspect-square '
        alt='banner'
      />
    </section>
  );
};
const TabFour = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:justify-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text'>
        <h1>Maximize your reach with minimal spending.</h1>
        <ul>
          <li>Find top keywords for PPC campaigns.</li>
          <li>Track competitor ads and landing pages.</li>
          <li>Optimize local advertising spend.</li>
          <li>Analyse Google Shopping performance.</li>
        </ul>
          <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
          Try Advertising Toolkit <i className='icon-right-arrow' />
            </Button>
      </div>
      <Image
        src={ADbannerImage}
        className='max-w-[30rem] aspect-square '
        alt='banner'
      />
    </section>
  );
};
const TabFive = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:justify-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text'>
        <h1>Build a winning social media strategy.</h1>
        <ul>
          <li>Schedule and automate your social posts.</li>
          <li>Measure and optimize your social performance.</li>
          <li>Track competitors and stay ahead. </li>
          <li>{"Protect your brand's reputation online."}</li>
        </ul>
          <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
          Try Social Media Toolkitt <i className='icon-right-arrow' />
            </Button>
      </div>
      <Image
        src={SMbannerImage}
        className='max-w-[30rem] aspect-square '
        alt='banner'
      />
    </section>
  );
};
const TabSix = () => {
  return (
    <section
      className='carousel_tabs max-md:flex-col max-md:justify-center'
      style={{ backgroundColor: "" }}
    >
      <div className='carousel_tabs_Text'>
        <h1>Streamline your agency for growth.</h1>
        <ul>
          <li>Generate consistent leads.</li>
          <li>Automate client tasks.</li>
          <li>Create branded client portals.</li>
          <li>Manage client workflows seamlessly.</li>
        </ul>
          <Button size={"lg"} className=" text-base border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">
          Try Agency Toolkit <i className='icon-right-arrow' />
            </Button>
  
      </div>
      <Image
        src={ASbannerImage}
        className='max-w-[30rem] aspect-square '
        alt='banner'
      />
    </section>
  );
};
export default BannerCarousel;
