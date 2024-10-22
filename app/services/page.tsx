import Image from 'next/image';
import React from 'react'
import seoBanner from '@/assets/seo1.webp'
import { CheckCheck, Star } from 'lucide-react';
const page = () => {
  return (
    <section>
      <header className=' flex justify-center items-center py-20 border-b max-w-screen-lg mx-auto mb-5'>
        <h1 className=' text-5xl font-semibold'>
        Search Engine Optimization
        </h1>
      </header>
      <main className=' max-w-[1300px] mx-auto px-10 space-y-20'>
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
            <p className=' leading-relaxed'>
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo Nemo enim ipsam voluptatem quia to voluptas sit
              aspernatur aut odit autfugite Doloremque laudantium, totam rem
              aperiam, eaque ipsa quae abillo inventore veritatis quasi
              architecto beatae vitae dicta sunt explicabo Nemo enim ipsam
              voluptatem quia to voluptas sit aspernatur aut odit autfugite
            </p>
            <p className=' leading-relaxed'>
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
          <p className='border-b-4 border-b-black'>Additional information</p>
          <p className=' leading-relaxed'>Tools</p>
        </div>
        <p className=' leading-relaxed'>
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
          <p className=' leading-relaxed'>
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