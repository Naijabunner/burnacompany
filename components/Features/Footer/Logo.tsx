import React from "react";
import Image from "next/image";
import LogoIcon from "@/Assets/FuziondotLogoNew.svg";
import facebook from "@/Assets/shared/icons8-facebook.svg";
import twitter from "@/Assets/shared/icons8-twitter.svg";
import instagram from "@/Assets/shared/icons8-instagram.svg";
import linkedin from "@/Assets/shared/icons8-linkedin.svg";

interface LogoProps {
  variant?: "default" | "small";
}

// Define a list of social media platforms and their associated icons
const socialIcons = [
  { name: "facebook", src: facebook, alt: "Facebook" },
  { name: "twitter", src: twitter, alt: "Twitter" },
  { name: "instagram", src: instagram, alt: "Instagram" },
  { name: "linkedin", src: linkedin, alt: "LinkedIn" },
];

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  const logoClass = variant === "small" ? "w-[130px]" : "w-28";
  const iconSize = 15; // Define icon size for all social icons in one place

  return (
    <div className="w-56 flex flex-col gap-10">
      <Image
        loading="lazy"
        src={LogoIcon}
        className={`object-contain ${logoClass}`}
        alt="PostPilot Logo"
        width={20}
        height={20}
      />
      <p className="text-sm mt-7">
        Sed perspiciatis unde omnis natus doloremque laudantium totae
      </p>

      <div className="flex gap-5">
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className="flex justify-center border w-8 h-8 rounded-full bg-primary"
          >
            <Image
              loading="lazy"
              src={icon.src}
              className="object-contain"
              alt={icon.alt}
              width={iconSize}
              height={iconSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
