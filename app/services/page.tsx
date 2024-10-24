import Image from 'next/image';
import React from 'react'
import seoBanner from '@/assets/seo1.webp'
import vector from '@/assets/Element2.svg'
import { CheckCheck, Star } from 'lucide-react';
const page = () => {
  return (
    <section className='px-[5%] md:px-10'>
      <header className='relative overflow-hidden bg-white my-10 flex justify-center rounded-lg items-center py-20 border-b max-w-screen-lg mx-auto '>
        <h1 className='px-[3%] z-10 text-4xl md:text-5xl font-semibold'>
        Search Engine <span className=' text-primary'>Optimization</span>
        </h1>
        {/* <Image
            src={vector}
            alt={"seo image"}
            className='opacity-50 -z-0 aspect-square max-h-[400px] rounded-lg absolute left-0'
          /> */}
      </header>
      <main className=' max-w-[1300px] mx-auto  space-y-20'>
        <div className=' grid md:grid-cols-2 gap-5 gap-y-10 '>
          <article className=' space-y-5'>
            <h2 className=' text-3xl font-semibold'>
              Search Engine Optimization
              <br />
              <span className=' text-sm flex items-end justify-start'>
                {" "}
                SEO
                <Star className=' w-5 h-5 fill-primary stroke-none' />
                <Star className=' w-5 h-5 fill-primary stroke-none' />
                <Star className=' w-5 h-5 fill-primary stroke-none' />
              </span>
            </h2>
            <p className=' text-lg leading-relaxed'>
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo Nemo enim ipsam voluptatem quia to voluptas sit
              aspernatur aut odit autfugite Doloremque laudantium, totam rem
              aperiam, eaque ipsa quae abillo inventore veritatis quasi
              architecto beatae vitae dicta sunt explicabo Nemo enim ipsam
              voluptatem quia to voluptas sit aspernatur aut odit autfugite
            </p>
            <p className=' text-lg leading-relaxed'>
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo Nemo enim ipsam voluptatem quia to voluptas sit
              aspernatur aut odit autfugite Doloremque laudantium, totam rem
              aperiam, eaque ipsa quae abillo inventore veritatis quasi
              architecto beatae vitae dicta sunt explicabo Nemo enim ipsam
              voluptatem quia to voluptas sit aspernatur aut odit autfugite
            </p>
          </article>
          <Image
            src={seoBanner}
            alt={"seo image"}
            className=' aspect-square max-h-[400px] rounded-lg'
          />
        </div>
    {/* Additional Informations and  tools  */}
        <div className=' space-y-5'>
        <div className='tabs flex justify-start gap-x-10 text-xl font-semibold  items-center border-b border-b-black'>
          <p className=''>Additional information</p>
          <p className=' leading-relaxed'>Tools</p>
        </div>
        <p className=' text-lg leading-relaxed'>
          Must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was born and I will give you a complete account of
          the system, and expound the actual teachings of the great explorer of
          the truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally
        </p>
        {/* tools */}
        <div className='tools space-y-5'>
          <p className=' text-xl'>
            Tools
          </p>
          <p className=' text-lg leading-relaxed'>
             Circumstances occur in which toil and pain can procure him some great
          pleasure. To take a trivial example, which of us ever undertakes
          laborious physical exercise, except to obtain some advantage from it?
          But who has any right to find fault with a man who chooses
          </p>
         <ul className=' space-y-3'>
          <li className=' flex gap-x-5 text-xl  '>
            <CheckCheck className=' stroke-primary'/>
            Tool 1</li>
          <li className=' flex gap-x-5 text-xl  '>
            <CheckCheck className=' stroke-primary'/>
            Tool 1</li>
          <li className=' flex gap-x-5 text-xl  '>
            <CheckCheck className=' stroke-primary'/>
            Tool 1</li>
          <li className=' flex gap-x-5 text-xl  '>
            <CheckCheck className=' stroke-primary'/>
            Tool 1</li>
             </ul>
        </div>
      </div>
      </main>
    </section>
  );
}

export default page