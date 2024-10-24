'use client'

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import circle from '@/Assets/shared/Ellipse 794.svg'
import circle1 from '@/Assets/shared/Ellipse 793.svg'
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});


  // 1. Define your form.
 

const page = () => {
     const form = useForm<z.infer<typeof formSchema>>({
       resolver: zodResolver(formSchema),
       defaultValues: {
         username: "",
       },
     });

     // 2. Define a submit handler.
     function onSubmit(values: z.infer<typeof formSchema>) {
       // Do something with the form values.
       // ✅ This will be type-safe and validated.
       console.log(values);
     }
  return (
    <div className="my-11">
      <div className="text-center my-11 max-w-[1560px] mx-auto">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <p className="text-[#717171] font-semibold">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      {/* the card */}
      <div className="flex max-w-[1560px] mx-auto ">
        <div className="flex flex-wrap mx-auto">
          {/* the black card */}
          <div className="bg-black relative  text-white flex flex-col justify-between h-[40rem] rounded-lg pl-5">
            <Image
              src={circle}
              alt="circle"
              className="absolute bottom-12 right-20 z-10"
            />
            <Image
              src={circle1}
              alt="circle"
              className="absolute bottom-0 right-0 "
            />
            <div className="my-7">
              <h1 className="font-semibold text-xl">Contact Information</h1>
              <p className="text-[#C9C9C9]">
                Say something to start a live chat!
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <Phone className="w-5" />
                +1012 3456 789
              </div>
              <div className="flex font-semibold text-sm gap-3">
                <Mail className="w-5" />
                demo@gmail.com
              </div>
              <div className="flex font-semibold text-sm gap-3">
                <MapPin className="w-5" />
                <p className="w-[70%]">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="flex font-semibold  mb-5 gap-3">
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                <Instagram className="w-4 " />
              </i>
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                <Twitter className="w-4 " />
              </i>
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                {" "}
                <Facebook className="w-4 " />
              </i>
            </div>
          </div>
          {/* white card */}
          <div className="flex pl-10 pt-9 bg-white w-[50rem] border">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-2  justify-center items-center gap-11">
                      <div>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                      </div>
                      <div>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input placeholder="Lastname" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                      </div>
                      <div>
                        {" "}
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                      </div>
                      <div>
                        {" "}
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </div>
                      <div>
                        <FormLabel>Message</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Textarea placeholder="Write your message" />
                <Button className="w-20" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page