import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Upload } from "lucide-react";

const ImageCard = ({data, setdata}) => {
  const [placeholder, setplaceholder] = useState(data.image?data.image: null)
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setdata('e','image',event.target.files[0])
      setplaceholder(newImage)
    }
  };
  return (
      <Card className='' x-chunk='dashboard-07-chunk-4'>
        <CardHeader>
          <CardTitle>Blog Image</CardTitle>
          <CardDescription>
            This is the cover image
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-2'>
          <label
              className="flex items-center justify-center w-full mx-auto aspect-square  rounded-md border border-dashed max-w-[300px] h-[300px] cursor-pointer"
              htmlFor={`file-input-${"index"}`}
            >
              <input
                id={`file-input-${"index"}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                className="hidden"
              />
              {placeholder ? (
                <img
                  src={placeholder}
                  alt='profilephoto'
                  className="object-cover aspect-video "
                />
              ) : (
                <p className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed'>
                <Upload className='h-4 w-4 text-muted-foreground' />
                <span className='sr-only'>Upload</span>
              </p>
              )}
            </label>
            
            {/* <div className='grid  1 grid-cols-3 gap-2'>

              <button className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed'>
                <Upload className='h-4 w-4 text-muted-foreground' />
                <span className='sr-only'>Upload</span>
              </button>
            </div> */}
          </div>
        </CardContent>
      </Card>
  );
};

export default ImageCard;
