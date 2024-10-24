
"use client";
import Link from "next/link";
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import LogoPng from "@/assets/FuziondotLogoNew.svg";
// import { useToast } from "@/hooks/use-toast"
// import { ToastAction } from "@/components/ui/toast"
import LoginBtn from "@/actions/login";
import { useState } from "react";



const LoginForm = () => {
  // const { toast } = useToast()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name) {
      setCredentials({ ...credentials, [name]: value });
    }
  };
  return (
    <section className=' min-w-screen flex justify-center items-center min-h-screen'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>
            <Link href='/'>
              <Image
                src={LogoPng}
                style={{ height: "1.5rem" }}
                alt='header-logo'
                className=' flex justify-center w-full mb-3'
              />
            </Link>
            Login
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                value={credentials.email}
                onChange={handleInputChange}
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input
                id='password'
                name='password'
                onChange={handleInputChange}
                type='password'
                required
              />
            </div>
            <LoginBtn credentials={credentials} />
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an access?{" "}
            <Link href='/' className='underline'>
              leave this page
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
export default LoginForm;
