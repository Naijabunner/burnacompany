import React, { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { objectToFormData, validateObject } from "../../../utils/utils";
import { useRouter } from "next/navigation";
import { Endpoints } from "@/Constant/edpoints"
import { fetchApi } from "@/services/services";


const CreateBlogBtn = ({ data }) => {
  const [loading, setloading] = useState(false)
  const { toast } = useToast();
  const router =useRouter()


  const CreateNewBlog = async () => {
    setloading(true);
    const getLocalStorage = localStorage.getItem("token");
    const token = JSON.parse(getLocalStorage);
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: objectToFormData(data),
    };
    const res = await fetchApi(Endpoints.admin_blog, options);
    if (!res.response.ok) {
      toast({
        variant: "destructive",
        title: "Blog Creation Error",
        description: res.parsedres.message || "Unknown error occurred",
      });
      setloading(false);

    } else {
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
      setloading(false);
      setTimeout(() => {
        toast.dismiss;
        router.push("/fuziondot/admin/dashboard");
      }, 500);
    }
  };


  const handleCreateNewBlog = () => {
    const validator = validateObject(data);
    if (!validator.isValid) {
      toast({
        variant: "destructive",
        title: "Validator Error",
        description: validator.message,
      });
      // setisLoading(false);
    } else {
      CreateNewBlog();
    }
  };

  return (
    <Button size='sm' onClick={handleCreateNewBlog}>
       {loading ? 'Creating blog...' : 'Create Blog'}
    </Button>
  );
};

export default CreateBlogBtn;
