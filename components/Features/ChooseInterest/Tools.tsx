import React from 'react'
import { useRouter } from 'next/navigation';
type toolItems = {
    keyword: string,
    title:string,
    description:string
    learn: string
    tools: string
}

const Tools:React.FC<toolItems> = ({title, description,learn,tools}) => {
  const router = useRouter()

  const handleNavigation = () =>{
   router.push(`/features/${title}`)
  }
return (
  <section onClick={handleNavigation} className="border border-[#d1d4db] justify-center min-h-60 px-5 py-6 rounded-lg cursor-pointer hover:shadow-2xl group transition-shadow">
    <h3 className="font-bold text-2xl mb-5 group-hover:text-primary">
      {title}
    </h3>
    <p className="mb-14 text-sm">{description}</p>
    <div className="mt-auto items-center flex  justify-between">
      <div className="group-hover:text-primary font-medium text-base text-[#575c66]">
        {learn}
      </div>
      <div className="bg-[#f0edf0e0] rounded-sm text-sm px-2 py-1">{tools}</div>
    </div>
  </section>
);
}

export default Tools