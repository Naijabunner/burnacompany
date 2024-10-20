

const Card = () => {
  return (
    <div>
      <section className="bg-gradient-to-r to-[#bfadfb] from-primary p-10 lg:p-20 mt-20 rounded-lg  ">
        <div className=" flex justify-center gap-10 flex-col ">
          <h1 className="text-white sm:text-xl text-lg lg:text-4xl flex justify-center font-bold">
            This is a card...Admire its Beauty
          </h1>
          <button className=" px-8 py-2 lg:px-28 lg:py-5 rounded-lg mx-auto bg-[#fbf2fbe0] lg:text-2xl font-bold">
            Miro
          </button>
        </div>
      </section>
    </div>
  );
}

export default Card