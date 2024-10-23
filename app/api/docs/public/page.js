// pages/api-documentation.js

import React from "react";

// Updated API documentation data
const apiEndpoints = [
  {
    title: "Get All Blogs",
    method: "GET",
    url: "/api/v1/blogs",
    description: "Fetches all blogs.",
    queryParams: [],
    response: {
      message: "Success",
      data: [
        {
          id: "66e45fd866e35a261e7df93e",
          title: "The Ultimate Guide to Digital Marketing",
          category: "DIGITAL",
          content:
            "In this guide, we cover the best strategies for digital marketing...",
          tags: ["RECENT", "TRENDING"],
          author: "John Doe",
          imageUrl:
            "https://example.com/blog-images/digital-marketing-guide.jpg",
          createdAt: "2024-09-12T23:59:13.675Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blog By ID",
    method: "GET",
    url: "/api/v1/blogs/<id:blogId>",
    description: "Fetch a blog by its unique ID.",
    queryParams: [
      { name: "blogId", type: "string", description: "The ID of the blog." },
    ],
    response: {
      message: "Success",
      content: {
        id: "66e4503666e35a261e7df93d",
        title: "The Ultimate Guide to Content Management",
        category: "CONTENT_MGT",
        content: "A deep dive into modern content management strategies...",
        tags: ["TRENDING", "RECENT"],
        author: "John Doe",
        imageUrl:
          "https://example.com/blog-images/content-management-guide.jpg",
        createdAt: "2024-09-12T23:59:13.675Z",
        admin: {
          id: "66e4457bf2e9f3fb7a06c9f6",
          email: "password1@email.com",
          fullName: "Miss Sue Murazik",
          description:
            "Learn the top 10 tips to excel in digital marketing...",
          profilePicUrl:
            "https://example.com/blog-images/digital-marketing-tips.jpg",
          socialLinks: [
            {
              facebook: "www.facebook.com",
              instagram: "www.instagram.com",
            },
          ],
          createdAt: "2024-09-13T14:00:27.498Z",
        },
      },
    },
  },
  {
    title: "Get Blogs by Page",
    method: "GET",
    url: "/api/v1/blogs?page=0",
    description: "Fetch blogs by pagination. Each page returns 3 blogs.",
    queryParams: [
      {
        name: "page",
        type: "integer",
        description: "Page number, starts at 0.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e4608366e35a261e7df940",
          title: "The Ultimate Guide to SEO",
          category: "SEO",
          content:
            "Learn the ins and outs of SEO with this comprehensive guide...",
          tags: ["POPULAR"],
          author: "Jane Smith",
          imageUrl: "https://example.com/blog-images/seo-guide.jpg",
          createdAt: "2024-09-11T22:45:10.000Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Tag",
    method: "GET",
    url: "/api/v1/queries?tags=TRENDING",
    description:
      "Fetch blogs filtered by a specific tag. Available tags are RECENT, POPULAR, and TRENDING.",
    queryParams: [
      { name: "tags", type: "string", description: "Filter by blog tag." },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e4608366e35a261e7df940",
          title: "The Ultimate Guide to SEO",
          category: "SEO",
          content:
            "Learn the ins and outs of SEO with this comprehensive guide...",
          tags: ["TRENDING"],
          author: "Jane Smith",
          imageUrl: "https://example.com/blog-images/seo-guide.jpg",
          createdAt: "2024-09-11T22:45:10.000Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Tag with Pagination",
    method: "GET",
    url: "/api/v1/queries?tags=POPULAR&page=1",
    description:
      "Fetch blogs by tag and pagination. Each page returns 3 blogs.",
    queryParams: [
      { name: "tags", type: "string", description: "Filter by blog tag." },
      {
        name: "page",
        type: "integer",
        description: "Page number, starts at 0.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e4608366e35a261e7df940",
          title: "The Ultimate Guide to SEO",
          category: "SEO",
          content:
            "Learn the ins and outs of SEO with this comprehensive guide...",
          tags: ["POPULAR"],
          author: "Jane Smith",
          imageUrl: "https://example.com/blog-images/seo-guide.jpg",
          createdAt: "2024-09-11T22:45:10.000Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Category",
    method: "GET",
    url: "/api/v1/queries?category=TIPS",
    description:
      "Fetch blogs filtered by a specific category. Available categories are DIGITAL, SEO, CONTENT_MGT, and TIPS.",
    queryParams: [
      {
        name: "category",
        type: "string",
        description: "Filter by blog category.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e45fd866e35a261e7df93e",
          title: "Top 10 Tips for Digital Marketing",
          category: "TIPS",
          content: "Learn the top 10 tips to excel in digital marketing...",
          tags: ["RECENT", "TRENDING"],
          author: "John Doe",
          imageUrl:
            "https://example.com/blog-images/digital-marketing-tips.jpg",
          createdAt: "2024-09-12T23:59:13.675Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Category with Pagination",
    method: "GET",
    url: "/api/v1/queries?category=TIPS&page=1",
    description:
      "Fetch blogs by category with pagination. Each page returns 3 blogs.",
    queryParams: [
      {
        name: "category",
        type: "string",
        description: "Filter by blog category.",
      },
      {
        name: "page",
        type: "integer",
        description: "Page number, starts at 0.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e45fd866e35a261e7df93e",
          title: "Top 10 Tips for Digital Marketing",
          category: "TIPS",
          content: "Learn the top 10 tips to excel in digital marketing...",
          tags: ["RECENT", "TRENDING"],
          author: "John Doe",
          imageUrl:
            "https://example.com/blog-images/digital-marketing-tips.jpg",
          createdAt: "2024-09-12T23:59:13.675Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Category and Tags",
    method: "GET",
    url: "/api/v1/queries?tags=POPULAR&category=TIPS",
    description: "Fetch blogs filtered by both category and tags.",
    queryParams: [
      { name: "tags", type: "string", description: "Filter by blog tag." },
      {
        name: "category",
        type: "string",
        description: "Filter by blog category.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e45fd866e35a261e7df93e",
          title: "Top 10 Tips for Digital Marketing",
          category: "TIPS",
          content: "Learn the top 10 tips to excel in digital marketing...",
          tags: ["POPULAR", "TRENDING"],
          author: "John Doe",
          imageUrl:
            "https://example.com/blog-images/digital-marketing-tips.jpg",
          createdAt: "2024-09-12T23:59:13.675Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs by Category and Tags with Pagination",
    method: "GET",
    url: "/api/v1/queries?category=TIPS&tags=POPULAR&page=1",
    description: "Fetch blogs by category and tags with pagination.",
    queryParams: [
      { name: "tags", type: "string", description: "Filter by blog tag." },
      {
        name: "category",
        type: "string",
        description: "Filter by blog category.",
      },
      {
        name: "page",
        type: "integer",
        description: "Page number, starts at 0.",
      },
    ],
    response: {
      message: "Success",
      data: [
        {
          id: "66e45fd866e35a261e7df93e",
          title: "Top 10 Tips for Digital Marketing",
          category: "TIPS",
          content: "Learn the top 10 tips to excel in digital marketing...",
          tags: ["POPULAR", "TRENDING"],
          author: "John Doe",
          imageUrl:
            "https://example.com/blog-images/digital-marketing-tips.jpg",
          createdAt: "2024-09-12T23:59:13.675Z",
          admin: {
            id: "66e4457bf2e9f3fb7a06c9f6",
            email: "password1@email.com",
            fullName: "Miss Sue Murazik",
            description:
              "Learn the top 10 tips to excel in digital marketing...",
            profilePicUrl:
              "https://example.com/blog-images/digital-marketing-tips.jpg",
            socialLinks: [
              {
                facebook: "www.facebook.com",
                instagram: "www.instagram.com",
              },
            ],
            createdAt: "2024-09-13T14:00:27.498Z",
          },
        },
      ],
    },
  },
  {
    title: "Get Blogs without Query Parameters (Error Response)",
    method: "GET",
    url: "/api/v1/queries",
    description: "Returns an error when no query parameters are passed.",
    queryParams: [],
    response: {
      message: "Query parameters are missing.",
      error: "bad request",
    },
  },
];

const ApiDocumentation = () => {
  return (
    <div className="container mx-auto p-6 mt-28">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
      <p className="mb-8">
        This page documents the available API endpoints in the system. Each API
        endpoint returns a detailed response in JSON format.
      </p>

      {apiEndpoints.map((api, index) => (
        <div
          key={index}
          className="mb-12 p-6 border border-gray-300 rounded-lg bg-white shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">{api.title}</h2>
          <p className="text-lg mb-2">
            <strong>Method:</strong> {api.method}
          </p>
          <p className="text-lg mb-2">
            <strong>Endpoint:</strong> <code>{api.url}</code>
          </p>
          <p className="text-lg mb-4">
            <strong>Description:</strong> {api.description}
          </p>

          {api.queryParams.length > 0 && (
            <div className="mb-4">
              <h4 className="text-lg font-medium">Query Parameters</h4>
              <ul className="list-disc pl-6">
                {api.queryParams.map((param, idx) => (
                  <li key={idx} className="mb-1">
                    <strong>{param.name}:</strong> {param.type} -{" "}
                    {param.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h4 className="text-lg font-medium mb-2">Response Example</h4>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            {JSON.stringify(api.response, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default ApiDocumentation;
