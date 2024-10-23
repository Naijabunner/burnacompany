'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";
import { fetchApi } from "@/services/services";
import { Endpoints } from "@/Constant/edpoints";
import { useToast } from "@/hooks/use-toast";

const DeleteBlog = ({ data, setisDel }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const deleteBlogFunc = async () => {
    setOpen(true);
    setloading(true);
    const getLocalStorage = localStorage.getItem("token");
    const token = JSON.parse(getLocalStorage);
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetchApi(Endpoints.admin_blog + data.id, options);
    if (!res.response.ok) {
      toast({
        variant: "destructive",
        title: "Delete Error",
        description: res.parsedres.message || "Unknown error occurred",
      });
      setOpen(false);
      setloading(false);
      setisDel(true);
    } else {
      toast({
        variant: "success",
        title: "succefully deleted",
        style: {
          backgroundColor: "#4caf50",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
        },
      });
      setOpen(false);
      setisDel(false);
      setloading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button
          size='icon'
          className='h-7 w-7  iconb p-1 bg-slate-50 text-black  border-2  border-red-500 hover:text-white hover:bg-red-500'
        >
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            blog.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={" flex items-center"}>
          <AlertDialogCancel className='mt-0'>Cancel</AlertDialogCancel>
          <Button onClick={deleteBlogFunc}  variant= "outline" size='lg'  className='bg-red-600 text-white hover:bg-red-500 '>
        {loading?'deleting from database':'Continue'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBlog;
