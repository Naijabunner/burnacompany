import React from "react";
import Image from "next/image";
import Picture from "@/Assets/shared/featuresPic.png"
type heroProps = {
  title: string;
  inside: string;
  description: string;
};

const Hero: React.FC<heroProps> = ({ title, inside, description }) => {
  return (
    <header className="my-11 flex">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-6 mb-12 text-xl">
          {description}
          <span className="text-primary"> {inside} </span> tools
        </p>
        <span className="bg-primary text-white text-lg px-16 py-4 rounded-md font-medium">
          Start Now
        </span>
      </div>

      <Image src={Picture} alt="logo" width={500} height={300} />
    </header>
  );
};

export default Hero;
