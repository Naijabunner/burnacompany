import Image from "next/image";
import headerImage from "@/Assets/shared/Image.png"; 
const BlogComponent = () =>{
    return (
      <section className='sm:px-5 py-10 md:py-20 max-w-[1080px] space-y-5 overflow-x-hidden mx-auto max-sm:mx-[5%]  max-md:mx-5'>
        <h1 className=" text-3xl sm:text-5xl leading-tight md:text-6xl !font-[900] md:!leading-[80px] text-zinc-800 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, fugit.
        </h1>
        <p className="  text-sm sm:text-base md:text-lg flex items-center gap-x-2 text-slate-500">
          <span>
            By
            <strong className=" ml-2">Steve Grant </strong>
          </span>
          .
          <span>
          Published in 
            <strong className=" ml-2">Advertising</strong>
          </span>
          .
          <span>
            April 16, 2020
          </span>
          .
          <span className="text-primary font-semibold">
            1 min read
          </span>
        </p>

        <div className="grid lg:grid-cols-[77%,23%] pt-5 " >
          <main className=" space-y-7">
          <Image src={headerImage} alt='jsjsj'
          className=" max-w-[700px] w-full"
          />

          <article className=" text-xl sm:text-2xl font-medium !leading-relaxed text-zinc-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sapiente architecto saepe illum aliquid amet, corrupti
            reprehenderit, nesciunt mollitia iure unde ratione quae possimus
            consequatur voluptatum commodi eligendi sequi vitae?
          </article>
          </main>
          <div className="h-full w-full bg-blue-200 max-lg:hidden">
          </div>
        </div>
      </section>
    );
}
export default BlogComponent