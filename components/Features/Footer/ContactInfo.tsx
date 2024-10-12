import React from "react";
import Image from "next/image";
const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-start self-start">
      <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-800">
        Contact
      </h2>
      <div className="flex gap-2.5 items-center self-stretch pr-32 mt-7 max-md:pr-5">
        <div className="flex items-start self-stretch my-auto w-6">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec3ed64c9512f4fa41328a853ceec8b28b8a894f38764fdfb0e803cba5c1427?placeholderIfAbsent=true&apiKey=100e2d6f7ca14266bfead5d17c059b5c"
            className="object-contain w-6 aspect-square"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <a
          href="mailto:support@postpilot.com"
          className="self-stretch my-auto text-base font-medium leading-tight text-zinc-800"
        >
          support@postpilot.com
        </a>
      </div>
      <p className="mt-7 text-base font-medium leading-8 text-zinc-600">
        Printed with <span className="text-orange-500">❤️️️</span> at our
        facility in South Carolina.
      </p>
    </div>
  );
};

export default ContactInfo;
