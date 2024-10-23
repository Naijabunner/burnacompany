import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const  CardOne = ({data, setdata}) => {
  return (
    <Card x-chunk='dashboard-07-chunk-0'>
      <CardHeader>
        <CardTitle>Blog Details</CardTitle>
        <CardDescription>Edit this lodge</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='name'>Title</Label>
            <Input
              id='name'
              name='title'
              type='text'
              value={data.title}
              className='w-full'
              onChange={setdata}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='name'>How many minutes will it take to read this blog?</Label>
            <Input
              id='name'
              name='readTime'
              type='number'
              className='w-full'
              value={data.readTime}
              onChange={setdata}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='author'>Author</Label>
            <Input
              id='author'
              name='author'
              type='text'
              className='w-full'
              value={data.author}
              onChange={setdata}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardOne;
