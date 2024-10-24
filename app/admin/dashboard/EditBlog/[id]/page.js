"use client";
import { DashboardTwo } from "@/components/dashboard/EditBlog/EditComponent";
import ErrorFetch from "@/components/dashboard/ErrorFetch";
import LoadingComp from "@/components/dashboard/loading";
import { Endpoints } from "@/Constant/edpoints";
import { fetchApi } from "@/services/services";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const { id } = params || {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(id)
  
  useEffect(() => {
    const getLocalStorage = localStorage.getItem("token");
    const token = JSON.parse(getLocalStorage);
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await fetchApi(Endpoints.admin_blog + id, options); // Replace with your API endpoint
        if (!res.response.ok) {
          throw new Error(res.parsedres.message || "Network is not okay");
        }
        setData(res.parsedres.content);
        // const result = await response.json();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  const page_details = {
    title: "Edit Blog",
  };

  const blogData = {
    title: data.title ? data.title : "",
    content: data.content ? data.content : "",
    category: data.category ? data.category : "",
    tags: data.tags ? data.tags : [],
    image: data.imageUrl ? data.imageUrl : "",
    readTime: data.readTime ? data.readTime : 1,
    isArchived: data.isArchived ? data.isArchived : true,
    author: data.author ? data.author : "",
  };

  return (
    <>
      {loading ? (
        <>
          <LoadingComp />
        </>
      ) : error ? (
        <ErrorFetch errMssg={error} />
      ) : (
        <DashboardTwo details={page_details} blogData={blogData} />
      )}
    </>
  );
};

export default Page;
