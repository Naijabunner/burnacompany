import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";


const ArchiveBlog = ({data, setdata}) => {
  const Tags=[
    {
      displayName:'Recent',
      value:'RECENT'
    },
    {
      displayName:'Popular',
      value:'POPULAR'
    },
    {
      displayName:'Trending',
      value:'TRENDING'
    },
  ]

  return (
    <Card x-chunk='dashboard-07-chunk-5'>
      <CardHeader>
        <CardTitle>Publish </CardTitle>
        <CardDescription>
          By default this blog will be published
        </CardDescription>
      </CardHeader>
      <CardContent className='flex items-center gap-x-2'>
        <p className='text-sm'>Archive</p>
        <Switch id='publish-mode'
         checked={data.isArchived}
         onCheckedChange={(checked)=>setdata('e', 'isArchived', checked)}
          />
        <p className='text-sm'>Publish</p>
      </CardContent>
      <CardFooter>
      <div className='blog-details-tags-box  mt-3 '>
              <h4 className='self-start'>Tags</h4> <br />
             
              <div className='blog-details-tags-list flex-wrap gap-3'>
                {Tags.map((ent)=>{
                  const isSelected= data.tags.includes(ent.value)
                  return (
                    <>
                    <Button onClick={()=>{setdata('e','tags',ent.value)}} className={`${isSelected? 'bg-purple-500 text-white': 'bg-white text-slate-600'}`}>
                      {ent.displayName}
                    </Button >
                    </>
                  )
                })}
              </div>
            </div>
      </CardFooter>
    </Card>
  );
}

export default ArchiveBlog