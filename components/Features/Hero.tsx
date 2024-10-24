import React from "react";
import Image from "next/image";
import Picture from "@/Assets/shared/featuresPic.png"
import { Button } from "../ui/button";
type heroProps = {
  title: string;
  inside: string;
  description: string;
};

const Hero: React.FC<heroProps> = ({ title, inside, description }) => {
  return (
    <header className="my-10 p-5 flex  gap-5 gap-y-10 max-lg:py-10 max-lg:flex-col bg-white rounded-lg">
      <div className=" flex justify-center flex-col space-y-5 flex-1">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className=" text-xl">
          {description}
          <span className="text-primary"> {inside} </span> tools
        </p>
        <Button size={'lg'} className="bg-primary w-fit text-white text-lg rounded-md font-medium">
          Start Now
        </Button>
      </div>

      <Image src={Picture} alt="logo" width={500} height={300} className="flex-1 self-center" />
    </header>
  );
};

export default Hero;
