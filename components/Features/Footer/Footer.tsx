import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";
import GetInTouchColumn from "./ContactInfo";
import FooterButtons from "./FooterButtons";

interface FooterProps {
  companyLinks: string[];
  CommunityLinks: string[];
 
}


const Footer: React.FC<FooterProps> = ({ companyLinks, CommunityLinks }) => {
  return (
    <footer className=" flex flex-col   justify-center gap-16 p-24 max-md:px-5 ">
      <div className="flex flex-wrap justify-between ml-10 gap-20 ">
        <Logo />
        <FooterColumn title="Quick Link" links={companyLinks} />
        <FooterColumn title="Community" links={CommunityLinks} />
        <GetInTouchColumn />
      </div>
      <FooterButtons />
    </footer>
  );
};

export default Footer;
