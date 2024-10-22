import Link from "next/link";
import React from "react";

const FooterButtons: React.FC = () => {
  return (
    <div className="flex justify-between w-[90%]  flex-wrap">
      <div className="flex gap-6 text-sm">
        <span> FaQs</span>
        <span>Company</span>
        <span>Privacy</span>
      </div>
      <div>
        <p className="text-sm">2024. Fuziondot, All Right Reserved</p>
      </div>
    </div>
  );
};

export default FooterButtons;
