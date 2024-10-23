'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import LogoPng from "@/assets/images/fuzionDot/FuziondotLogoNew.svg";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import useUser from "@/hooks/use-user"
import { useState } from "react"
import { registerUser } from "@/services/Api/userApi"
import { handleFetchError } from "../../../../../utils/utils"
import { useRouter } from "next/navigation"
import RegisterBtn from "@/components/buttons/register"

 const RegisterForm=()=> {
  // const {
  //   user,
  //   loading,
  //   error,
  //   login,
  //   logout,
  //   register
  // } = useUser()
  const { toast } = useToast()
  const router =useRouter()
  const [credentials, setcredentials] = useState({
    fullName:'',
    email:'',
    password:''
  })
  const handleInputChange= (e)=>{
    const {name, value} = e.target
    if (name ) {
      setcredentials({...credentials, [name]:value})
    }
  }

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
            Register
          </CardTitle>
          <CardDescription>
            Enter your details below to Register to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='fullname'>FullName</Label>
              <Input
                id='fullname'
                type='fullname'
                placeholder='John Doe'
                name='fullName'
                onChange={handleInputChange}
                value={credentials.fullName}
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                name='email'
                onChange={handleInputChange}
                value={credentials.email}
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input id='password' type='password'
              name="password"
              placeholder='**********'
              onChange={handleInputChange}
              value={credentials.password}
              required />
            </div>
            <RegisterBtn credentials={credentials}/>
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
}
export default RegisterForm;