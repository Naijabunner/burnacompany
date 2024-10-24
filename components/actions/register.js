"use client";
import React, { useState } from "react";
import { handleFetchError } from "../../../utils/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Endpoints } from "@/Constant/edpoints";
import { fetchApi } from "@/services/services";
import Btn_loader from "../shared/btn_loader";

const RegisterBtn = ({ credentials }) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  const handleBtn = async () => {
    setisLoading(true)
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    };

    const res = await fetchApi(Endpoints.admin_register, options);
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
      localStorage.setItem("token", JSON.stringify(res.parsedres.data.token) );
      setTimeout(() => {
        toast.dismiss
        router.push("/fuziondot/admin/dashboard");
      }, 500);

    } else {

      toast({
        variant: "destructive",
        title: "Registration Error",
        description:
          handleFetchError(res.parsedres.status, res.parsedres.message) ||
          "Unknown error occurred",
      });
      setisLoading(false)
    }
    return finalRes;
  };

  return (
    <Button disabled={isLoading} type='submit' className='w-full bg-purple-700' onClick={handleBtn}>
      {isLoading? <Btn_loader/>:'Register'}
    </Button>
  );
};

export default RegisterBtn;
