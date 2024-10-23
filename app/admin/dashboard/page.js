'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardOne } from "@/components/dashboard/blog_card"
import React, { useEffect, useState } from 'react';
import { fetchApi } from "@/services/services";
import { Endpoints } from "@/Constant/edpoints";
import { Button } from "@/components/ui/button";
import Loading from "./loading";
import LoadingComp from "@/components/dashboard/loading";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import ErrorFetch from "@/components/dashboard/ErrorFetch";

const Dashboard =() =>{
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("token");
    const token = JSON.parse(getLocalStorage);
    const fetchData = async () => {
      const options ={
        method:'GET',
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }
      try {
          const res = await fetchApi(Endpoints.admin_blog, options); // Replace with your API endpoint
           if (!res.response.ok) {
              throw new Error(res.parsedres.message || 'Network is not okay');
         }
         setData(res.parsedres.data)
        // const result = await response.json();
      } catch (err) {
        
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 relative'>
        
        <Tabs defaultValue='All Blogs' className=''>
          <div className=" flex justify-between items-center flex-wrap mb-5">
          <TabsList>
            <TabsTrigger value='All Blogs'>All Blogs</TabsTrigger>
            <TabsTrigger value='password'>Payment</TabsTrigger>
            <TabsTrigger value='trending'>Trending</TabsTrigger>
          </TabsList>

          <Button >
            <Link href={'/fuziondot/admin/dashboard/EditBlog'}>
            <PlusCircleIcon className=" text-white"/>
            </Link> 
          </Button>
          </div>
         
          <TabsContent value='All Blogs' className=''>
            {
               loading?
                 <>
                  <LoadingComp/>
                </>: error?
                <ErrorFetch errMssg={error}/>
                :
              <CardOne data={data}/>}
          </TabsContent>
          <TabsContent value='Popular'>
          <></>
          </TabsContent>
          <TabsContent value='trending'> 
            <></>
          </TabsContent>
        </Tabs>
      </main> 
    </div>
  );
}



export default Dashboard;