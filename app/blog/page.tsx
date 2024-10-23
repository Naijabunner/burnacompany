import Image from 'next/image'
import React from 'react'
import DisplayLayoutOne from '@/components/Blog/displayLayoutOne'
// import { useRouter } from 'next/navigation'
const page = () => {
  // const router = useRouter()

  // const handleNavigation = () => {
  //    router.push(`/features/${}`);
  // }

     const categories=[
     {
       label:'Digital marketing',
       value:'Digital',
     },
     {
       label:'SEO',
       value:'SEO',
     },
     {
       label:'Content management',
       value:'Content_mgt',
     },
     {
       label:'Tips',
       value:'Tips',
     }
   ]
  return (
    <section className=' py-10 md:py-20 max-w-[1080px] mx-auto max-sm:mx-[5%]  max-md:mx-5'>
      <header className=' flex justify-center gap-5 items-center px-2 flex-wrap'>  
      {
        categories.map((category)=>{
          return(
            <div className="min-h-14 text-xs sm:text-sm md:text-base font-semibold text-slate-500 bg-white w-60 flex justify-center rounded items-center p-1 text-center" key={category.label}>
              {category.label}
            </div>
          )
        })
      }
      </header>
      <main>
       <DisplayLayoutOne/>
        
      </main>
    </section>
  );
}

export default page