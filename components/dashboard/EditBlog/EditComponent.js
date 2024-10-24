
'use client'
import CardOne from "./CardOne";
import ContentCard from "./CardTwo";
import Category_readT from "./CardThree";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ImageCard from "./ImageCard";
import ArchiveBlog from "./ArchiveBlog";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getFilterArrIsPresent } from "@/lib/utils";
import CreateBlogBtn from "@/components/buttons/createBlogBtn";
import EditBlogBtn from "@/components/buttons/editBlogBtn";
import LoadingComp from "../loading";



export function DashboardTwo({ details, blogData }) {

  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [data, setdata] = useState({
    title: blogData.title?blogData.title: "",
    content: blogData.content?blogData.content:'',
    category: blogData.category?blogData.category: "",
    tags: blogData.tags?blogData.tags: [],
    image: blogData.image?blogData.image:'',
    readTime: blogData.readTime?blogData.readTime: 1,
    isArchived: blogData.isArchived?blogData.isArchived:true,
    author: blogData.author?blogData.author:''
  });
  const handleSetData = (e, field, content) => {
    if (field === "content") {
      setdata({ ...data, content: content });
    } else if (field === "category") {
      setdata({ ...data, category: content });
    } else if (field === "isArchived") {
      setdata({ ...data, isArchived: content });
    } else if (field === "tags") {
      let arr = getFilterArrIsPresent(data.tags, content);
      setdata({ ...data, tags: arr });
    } else if(field === "image"){
      setdata({ ...data, image: content });
    }else {
      const { name, value } = e.target;
      setdata({ ...data, [name]: value });
    }
  };


  return (
    <main className='relative mx-5 mb-2 grid flex-1 items-start gap-4  sm:px-0 sm:py-0 md:gap-8 '>
      <div className='mx-auto grid  flex-1 auto-rows-max gap-4'>
        {/* Blog header */}
        <div className='flex mt-3 gap-4 items-start'>
          <Button
            variant='outline'
            size='icon'
            className='h-7 w-7'
            onClick={() => router.back()}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Back</span>
          </Button>
          <h1 className='text-xl'>{details.title}</h1>

          <div className='hidden items-center gap-2 md:ml-auto md:flex'>
            <Button variant='outline' size='sm'>
              Discard
            </Button>
            {details.title === 'Create Blog'?
            <CreateBlogBtn data={data} />
          :<EditBlogBtn data={data} />}
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
          <div className='grid auto-rows-max items-start  gap-4 lg:col-span-2 lg:gap-8'>
            <CardOne data={data} setdata={handleSetData} />
            <ContentCard data={data} setdata={handleSetData} />
            <Category_readT data={data} setdata={handleSetData} />
          </div>

          <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
            <ImageCard data={data} setdata={handleSetData} />
            <ArchiveBlog data={data} setdata={handleSetData} />
          </div>
        </div>

        <div className='flex items-center justify-center gap-2 md:hidden'>
          <Button variant='outline' size='sm'>
            Discard
          </Button>
          {details.title === 'Create Blog'?
            <CreateBlogBtn data={data}  />
          :<EditBlogBtn data={data}  />}
        </div>
      </div>
    </main>
  );
}
