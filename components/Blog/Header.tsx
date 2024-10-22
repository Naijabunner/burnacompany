import Image from "next/image";
import headerImage from "@/Assets/shared/Image.png"; // Fixed import

type HeaderProps = {
    title: string;
    author: string;
    date: string;
    image?: string;
    article: string[];
}

const Header: React.FC<HeaderProps> = ({ title, author, date, image, article }) => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex gap-2 text-[#696A75]">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
      <Image
        src={image || headerImage}
        alt="Header image"
        width={850}
        height={850}
      />
       {article.map((paragraph,index)=> (
        <p key={index}>{paragraph}</p>
       ))}
    </header>
  );
}

export default Header;