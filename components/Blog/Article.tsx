import Image from "next/image";
import headerImage from "@/Assets/shared/Image.png"; 
type ArticleProps = {
  title: string;
  article: string[];
  quote?: string;
  image?: string;
};



const Article:React.FC<ArticleProps>= ({title,article,quote,image}) =>{
    return (
      <section className="flex flex-col gap-5">
        <h3 className="font-bold text-xl">{title}</h3>
        {article.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {quote && (
          <blockquote className="bg-[#F6F6F7] p-8 rounded-lg text-lg">
            <i>{quote}</i>
          </blockquote>
        )}

        {image && (
          <Image src={image || headerImage} alt="Header image" width={850} height={850} />
        )}
      </section>
    );
}

export default Article