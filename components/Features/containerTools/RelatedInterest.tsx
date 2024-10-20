import { data } from "@/lib/data";

function RelatedInterest(){
    const slice = data.slice(4,7)
    return (
      <section className="my-28">
        <h1 className="text-5xl text-center font-bold">Related Features</h1>
        <p className="text-xl text-center mx-auto my-11 max-w-[760px] font-medium">
          Try other amazing SEO tools from Semrush and master your organic
          performance on Google
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {slice.map((item, index) => (
            <section
            key={index}
              className="border border-[#d1d4db] justify-center min-h-60 px-5 py-6 rounded-lg cursor-pointer hover:shadow-2xl group transition-shadow duration-500 hover:border-none"
            >
              <h3 className="font-bold text-2xl mb-5 group-hover:text-primary important-hover-text-red">
                {item.title}
              </h3>
              <p className="mb-14 text-sm">{item.description}</p>
              <div className="mt-auto items-center flex  justify-between">
                <div className="group-hover:text-primary important-hover-text-red font-medium text-base text-[#575c66]">
                  {item.learn}
                </div>
                <div className="bg-[#f0edf0e0] rounded-sm text-sm px-2 py-1">
                  {item.tools}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    );
}
export default RelatedInterest