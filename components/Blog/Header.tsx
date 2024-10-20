import Image from "next/image";
import headerImage from "@/Assets/shared/Image.png"; // Fixed import

type HeaderProps = {
    title: string;
    author: string;
    date: string;
    image?: string;
    article: string;
}

const Header: React.FC<HeaderProps> = ({ title, author, date, image, article }) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <Image src={image || headerImage} alt="Header image" width={50} height={50} />
      <p>{article}</p>
    </header>
  );
}

export default Header;