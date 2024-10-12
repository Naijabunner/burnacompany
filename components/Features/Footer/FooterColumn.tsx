import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <nav className="flex flex-col text-zinc-800">
      <h2 className="text-sm font-bold tracking-widest leading-none uppercase">
        {title}
      </h2>
      <ul className="flex flex-col mt-7 text-base font-medium leading-8">
        {links.map((link, index) => (
          <li key={index} className={index > 0 ? "mt-3.5" : ""}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;
