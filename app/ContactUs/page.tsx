"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import circle from "@/Assets/shared/Ellipse 794.svg";
import circle1 from "@/Assets/shared/Ellipse 793.svg";
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

// Define your form schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters long.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="my-11 ">
      <div className="text-center my-11 max-w-[1560px] mx-auto">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <p className="text-[#717171] font-semibold">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Contact Form and Info Cards */}
      <div className="flex max-w-[1560px] mx-auto border">
        <div className="grid lg:grid-cols-[40%,20%] max-md:w-72 sm:grid-cols-1 mx-auto">
          {/* Contact Info Card */}
          <div className="bg-primary max-md:w-[20rem] relative text-white flex flex-col justify-between lg:h-[40rem] rounded-lg pl-5">
            <Image
              src={circle}
              alt="circle"
              className="absolute bottom-12 right-20 z-10"
            />
            <Image
              src={circle1}
              alt="circle"
              className="absolute bottom-0 right-0"
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
            <div className="flex font-semibold mb-5 gap-3">
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                <Instagram className="w-4" />
              </i>
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                <Twitter className="w-4" />
              </i>
              <i className="hover:bg-white hover:text-black w-6 h-6 flex justify-center rounded-full">
                {" "}
                <Facebook className="w-4" />
              </i>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pr-10 max-md:w-[20rem] px-3 py-7 lg:pl-10 lg:pt-9 bg-white lg:w-[50rem] border pb-10 max-sm:px-8 max-md: rounded-lg">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8  "
              >
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-20">
                  <div className="flex-1 mt-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    {" "}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Write your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mb-11" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
