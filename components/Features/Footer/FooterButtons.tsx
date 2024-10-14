import Link from "next/link";
import React from "react";

const FooterButtons: React.FC = () => {
  return (
    <div className="flex gap-4 items-start py-2 font-medium text-center">
      <Link
        href="#"
        className="px-6 pt-3.5 pb-3 text-base leading-tight whitespace-nowrap bg-[#fbf2fbe0] rounded-xl border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)] text-zinc-800 max-md:px-5"
      >
        Login
      </Link>
      <Link
        href="#"
        className="pt-3.5 pr-6 pb-3 pl-6 text-sm leading-none text-white bg-primary rounded-xl border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)] max-md:px-5"
      >
        Try it for free
      </Link>
    </div>
  );
};

export default FooterButtons;
