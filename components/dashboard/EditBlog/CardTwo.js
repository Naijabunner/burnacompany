import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Tiptap from '@/components/Tiptap';

const ContentCard = ({data, setdata}) => {
  return (
    <Card x-chunk="dashboard-07-chunk-1">
    <CardHeader>
      <CardTitle>Content</CardTitle>
      <CardDescription>
        Write your content in the box below
      </CardDescription>
    </CardHeader>
    <CardContent>
    <Tiptap data={data} setdata={setdata}/>
    </CardContent>

  </Card>
  )
}

export default ContentCard;