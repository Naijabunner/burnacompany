import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";
import GetInTouchColumn from "./ContactInfo";

interface FooterProps {
  companyLinks: string[];
  CommunityLinks: string[];
 
}


const Footer: React.FC<FooterProps> = ({ companyLinks, CommunityLinks }) => {
  return (
    <footer className="flex items-start  p-24 bg-white max-md:px-5 mt-9">
      <div className="flex flex-col min-w-[240px] w-[1290px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1290px] max-md:max-w-full">
          <div className="flex flex-col pr-4 pb-11 text-sm font-medium leading-6 text-zinc-600">
            <Logo />
          </div>
          <div className="flex justify-center  mx-auto gap-52 ">
            <FooterColumn title="Quick Link" links={companyLinks} />
            <FooterColumn title="Community" links={CommunityLinks} />
            <GetInTouchColumn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
