import React from "react";
import Image from "next/image";

interface FooterColumnProps {
  title: string;
  links: string[];
  image?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, image }) => {
  return (
    <nav className="flex flex-col w-58">
      <h2 className="text-2xl font-bold  ">
        {title}
      </h2>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <div key={index}>
            {image && <Image src={image} alt="icon" width={20} height={20} />}
            <li className="">
              <p className="text-sm mt-5">{link}</p>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;
