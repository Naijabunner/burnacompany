import React from "react";
import FooterColumn from "./FooterColumn";
import ContactInfo from "./ContactInfo";
import FooterButtons from "./FooterButtons";
import Logo from "./Logo";

interface FooterProps {
  companyLinks: string[];
  pricingLinks: string[];
}


const Footer: React.FC<FooterProps> = ({ companyLinks, pricingLinks }) => {
  return (
    <footer className="flex items-start px-20 pt-24 bg-white max-md:px-5 mt-9">
      <div className="flex flex-col min-w-[240px] w-[1290px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1290px] max-md:max-w-full">
          <div className="flex flex-col pr-4 pb-11 text-sm font-medium leading-6 text-zinc-600">
            <Logo />
            <p className="mt-6">
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to more than double our paper usage.
            </p>
          </div>
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Pricing" links={pricingLinks} />
          <ContactInfo />
        </div>
        <div className="flex flex-wrap  justify-between items-start pt-12 pb-12 mt-24 border-t border-neutral-200 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col pt-0.5 pb-px min-w-[240px]">
            <Logo variant="small" />
            <p className="mt-2.5 text-sm font-medium leading-loose text-zinc-600">
              © 2022 PostPilot, Inc. All rights reserved.
            </p>
          </div>
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
