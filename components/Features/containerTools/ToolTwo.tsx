import { data } from "@/lib/data"
import Image from "next/image";
import keyword from "@/Assets/shared/keyword-overview.svg";
function ToolsTwo(){

    const spliceData = data.slice(0,4)
    return (
      <div className="grid lg:grid-cols-[0.5fr_0.5fr] grid-cols-1 mx-auto  gap-10 mt-20 ">
        {spliceData.map((item, index) => (
          <section
            key={index}
            className="border border-[#d1d4db] justify-center  min-h-72 px-5 py-6 rounded-lg cursor-pointer hover:shadow-2xl group transition-shadow duration-500 hover:border-none flex flex-col"
          >
            <h3 className="font-bold text-2xl mb-5 group-hover:text-primary important-hover-text-red">
              {item.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className="mb-14 text-lg text-wrap w-52">{item.description}</p>
              <Image
                src={item?.image || keyword}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="mt-24 items-center flex  justify-between">
              <div className="bg-black bg-opacity-5 py-3 px-7 rounded-lg group-hover:bg-primary group-hover:text-white ">
                Try It Free
              </div>
              <div className="group-hover:text-primary important-hover-text-red font-medium text-base text-[#575c66]">
                {item.learn}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
}
export default ToolsTwo

{/* <section
    onClick={handleNavigation}
    className="border border-[#d1d4db] justify-center min-h-60 px-5 py-6 rounded-lg cursor-pointer hover:shadow-2xl group transition-shadow hover:border-none"
  >
    <h3 className="font-bold text-2xl mb-5 group-hover:text-primary important-hover-text-red">
      {title}
    </h3>
    <p className="mb-14 text-sm">{description}</p>
    <div className="mt-auto items-center flex  justify-between">
      <div className="group-hover:text-primary important-hover-text-red font-medium text-base text-[#575c66]">
        {learn}
      </div>
      <div className="bg-[#f0edf0e0] rounded-sm text-sm px-2 py-1">{tools}</div>
    </div>
  </section> */}