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
            className="border border-[#d1d4db] justify-center sm:p-2 max-sm:p-2 lg:min-h-72 lg:px-5 lg:py-6 rounded-lg cursor-pointer hover:shadow-2xl group transition-shadow duration-500 hover:border-none flex flex-col"
          >
            <h3 className="font-bold lg:text-2xl text-xl mb-5 group-hover:text-primary important-hover-text-red">
              {item.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className="mb-14 sm:text-base lg:text-lg text-sm text-wrap w-52">{item.description}</p>
              <Image
                src={item?.image || keyword}
                alt=""
                width={2}
                height={200}
                className="sm:w-40 max-sm:w-20 lg:"
              />
            </div>
            <div className="mt-24 items-center flex  justify-between">
              <div className="bg-black lg:text-base sm:text-sm bg-opacity-5 p-2 lg:py-3 lg:px-7 rounded-lg group-hover:bg-primary group-hover:text-white ">
                Try It Free
              </div>
              <div className="group-hover:text-primary important-hover-text-red font-medium text-sm lg:text-base text-[#575c66]">
                {item.learn}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
}
export default ToolsTwo

