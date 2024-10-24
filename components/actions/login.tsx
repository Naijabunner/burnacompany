"use client";
import React, { useState } from "react";
import { handleFetchError } from "@/utils/utility";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Endpoints } from "@/Constant/edpoints";
import { fetchApi } from "@/services/services";
import Btn_loader from "@/components/shared/btn_loader";

const LoginBtn = ({ credentials }) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  // this contains the option, thats pretty obvious
  // calling the fetch aoi functin with params
  // await the call and deply toast based on the response
  // visit  utils /fetch api to understand it better
  const handleBtn = async () => {
    setisLoading(true);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
  }
  

    const res = await fetchApi(Endpoints.admin_login, options);
    let finalRes;
    if (res.response.ok) {
      toast({
        variant: "success",
        title: res.parsedres.message,
        description: "redirecting",
        style:  {
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
        },
      });
      localStorage.setItem("token",JSON.stringify( res.parsedres.token));
      setTimeout(() => {
        toast.dismiss;
        router.push("/fuziondot/admin/dashboard");
      }, 500);
    } else {
      toast({
        variant: "destructive",
        title: "Login Error",
        description:
          handleFetchError(res.parsedres.status, res.parsedres.message) ||
          "Unknown error occurred",
      });
      setisLoading(false);
    }
    return finalRes;
  };

 return(
   <Button
      disabled={isLoading}
      type='submit'
      className='w-full !bg-purple-700'
      onClick={handleBtn}
    >
      {isLoading ? <Btn_loader /> : "Login"}
    </Button>
 )
};

export default LoginBtn;
