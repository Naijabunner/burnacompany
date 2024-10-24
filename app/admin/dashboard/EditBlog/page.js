import { DashboardTwo } from '@/components/dashboard/EditBlog/EditComponent'
import React from 'react'

const CreateBlog = () => {
    const page_details = {
        title:'Create Blog',
    };
    const blogData={
      title: "",
      content:'',
      category: "",
      tags: [],
      image: '',
      readTime: 1,
      isArchived:true,
      author:''
    };
  return (
   <>
   <DashboardTwo details={page_details} blogData={blogData}/>
   </>
  )
}

export default CreateBlog