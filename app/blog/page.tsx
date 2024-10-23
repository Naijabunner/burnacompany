import Image from 'next/image'
import React from 'react'
import testImage from '@/Assets/Rectangle 38.jpg'
import CategoryIndicator from '@/components/Blog/categoryIndicator'
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
    <section className=' py-10 md:py-20 max-w-screen-xl bg-green-300 mx-auto max-sm:mx-[5%]  max-md:mx-10'>
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
        <div className="cardOne">
          <Image
          src={}
          alt=''
          />
          <div className="">
            <CategoryIndicator category='Advert'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p>
              <span>
                Jane Smith
                </span>
                <span>
                  May 15, 2021
                  </span>
                  <span>
                    2 min
                  </span>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default page