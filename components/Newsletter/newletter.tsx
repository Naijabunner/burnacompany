import React from "react";
import { Button } from "../ui/button";
import { Mail, Send } from "lucide-react";
const Newletter = () => {
  return (
    <section>
      <div className=' overflow-hidden section relative w-full min-h-[400px] py-10 md:min-h-[600px]   px-[5%] md:px-10 flex justify-center items-center '>
        <div className='relative w-full max-w-screen-lg px-[5%] py-10 md:py-20 shadow  bg-white rounded-lg'>
          <div className=' flex mx-auto w-fit h-full justify-center flex-col items-end gap-y-4  text '>
            <h6 className=' text-4xl text-black !leading-[66px] font-semibold self-center'>
              Join our Newsletter
            </h6>
            <p className=' max-w-[500px] font-semibold text-slate-500 text-sm md:text-base  leading-loose'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              inventore dolorum et veniam more text here !
            </p>
            <form className=' flex overflow-hidden max-sm:flex-col max-sm:rounded gap-8 border border-zinc-700 w-full max-w-[500px] p-2 rounded-full '>
              <input
                type='email'
                name='Email'
                id=''
                placeholder='Email here'
                className='max-sm:border-b border-black flex-1  outline-none pl-2 '
              />
              <Button className=' bg-primary  text-slate-200 w-[100px] rounded-full '>
                Subscribe
              </Button>
            </form>
          </div>
          <Mail className='max-md:hidden absolute -bottom-0 right-0 w-32 h-32 stroke-primary stroke-1 -rotate-45  ' />
          <Send className='max-sm:hidden absolute -top-16 -left-10 w-44 h-48 stroke-primary stroke-1  ' />
        </div>
      </div>{" "}
    </section>
  );
};

export default Newletter;
