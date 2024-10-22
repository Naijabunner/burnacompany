import React from "react";
import Image from "next/image";

interface FooterColumnProps {
  title: string;
  links: string[];
  image?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, image }) => {
  return (
    <nav className="flex flex-col">
      <h2 className="text-2xl font-bold  ">
        {title}
      </h2>
      <ul className="flex flex-col mt-7 text-base font-medium leading-8">
        {links.map((link, index) => (
          <div key={index}>
            {image && <Image src={image} alt="icon" width={20} height={20} />}
            <li>
              <a href="#">{link}</a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;
