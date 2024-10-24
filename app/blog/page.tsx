import React from "react";
import DisplayLayoutOne from "@/components/Blog/displayLayoutOne";
import DisplayLayoutTwo from "@/components/Blog/DisplayLayoutTwo";
import BlogPageHeader from "@/components/Blog/blogPageHeader";

const page = () => {
  return (
    <section className='sm:px-5 py-10 md:py-20 max-w-[1080px] mx-auto max-sm:mx-[5%]  max-md:mx-5'>
      <BlogPageHeader />
      <main>
        <DisplayLayoutOne />
        <DisplayLayoutTwo />
      </main>
    </section>
  );
};

export default page;
