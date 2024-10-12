import React from "react";
import Image from "next/image";
import Demo from '@/Assets/shared/Demo.svg'
interface LogoProps {
  variant?: "default" | "small";
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  const logoClass = variant === "small" ? "w-[130px]" : "w-28";

  return (
    <Image
      loading="lazy"
      src={Demo}
      className={`object-contain max-w-full aspect-[1.02] ${logoClass}`}
      alt="PostPilot Logo"
      width={20}
      height={20}
    />
  );
};

export default Logo;
