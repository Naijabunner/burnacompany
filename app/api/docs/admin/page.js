// pages/api-documentation.js

import React from "react";

// Updated API documentation data
const apiEndpoints = [
  {
    title: "Admin Registration",
    method: "POST",
    url: "/api/v1/admin/register",
    description: "Register a new admin user. notice the camel case",
    bodyParams: [
      { name: "email", type: "string", description: "Admin email address." },
      { name: "password", type: "string", description: "Admin password." },
      { name: "fullName", type: "string", description: "Admin's full name." },
    ],
    response: {
      message: "Admin created successfully",
      data: {
        Admin: {
          id: "66e9fc3966f77a3e320b8e39",
          email: "email@gmail.com",
          fullName: "backend developer",
          description: null,
          profilePicUrl: null,
          socialLinks: [],
          createdAt: "2024-09-17T22:01:29.823Z",
        },
        token: "eyJhbGciOiJIUzI1NiJ9..............",
      },
    },
  },

  {
    title: "Admin Login",
    method: "POST",
    url: "/api/v1/admin/login",
    description: "Login an existing admin user.",
    bodyParams: [
      { name: "email", type: "string", description: "Admin email address." },
      { name: "password", type: "string", description: "Admin password." },
    ],
    response: {
      message: "Admin logged in successfully",
      data: {
        id: "66e9fc3966f77a3e320b8e39",
        email: "email@gmail.com",
        fullName: "backend developer",
        description: null,
        profilePicUrl: null,
        socialLinks: [],
        createdAt: "2024-09-17T22:01:29.823Z",
      },
      token: "eyJhbGciOiJIUzI1NiJ9..............",
    },
  },

  {
    title: "Get Admin Profile",
    method: "GET",
    url: "/api/v1/admin/update",
    description:
      "Retrieve an admin profile by its ID which is decoded from JWT.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    response: {
      message: "success",
      data: {
        id: "66e9fc3966f77a3e320b8e39",
        email: "augustine32fg@gmail.com",
        fullName: "backend developer",
        description: null,
        profilePicUrl: null,
        socialLinks: [
          { facebook: "www.facebook.com", instagram: "www.instagram.com" },
        ],
        createdAt: "2024-09-17T22:01:29.823Z",
      },
    },
  },

  {
    title: "Update Admin Profile",
    method: "PUT",
    url: "/api/v1/admin/update",
    description:
      "To update an admin profile, retrieve the admin and previous data, then send the new data to the server.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    formData: [
      { name: "email", type: "string", description: "Admin email address." },
      { name: "fullName", type: "string", description: "Admin's full name." },
      { name: "description", type: "text", description: "Admin description." },
      {
        name: "socialLinks",
        type: "object",
        description:
          " an object seperated by commas eg: {facebook: 'facebook.com'}, {insta: 'instagram.com'},{pin:'pininterest.com'}",
      },
      {
        name: "profilePic",
        type: "image",
        description: "Admin profile picture.",
      },
    ],
    response: {
      message: "Admin updated successfully",
      data: {
        id: "66e9fc3966f77a3e320b8e39",
        email: "augustine32@gmail.com",
        fullName: "Frontend developer",
        description:
          "Amaritudo creta coaegresco vox cupio peior depono accusator magni. Claro laboriosam sed vito soluta. Aetas succurro audeo fugiat eum summisse quidem arguo contabesco quam.",
        profilePicUrl: "https://od.lk/s/OTdfODc3MzY1OTdf/t3peXGlW2EgOJXl.png",
        socialLinks: [
          '{facebook: "facebook.com"}',
          '{insta: "instagram.com"}',
          '{pin:"pininterest.com"}',
        ],
        createdAt: "2024-09-17T22:01:29.823Z",
      },
    },
  },

  {
    title: "Create New Blog Post",
    method: "POST",
    url: "/api/v1/admin/blog/:postId",
    description: "Create a new blog post.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    formData: [
      { name: "title", type: "text", description: "Blog post title." },
      { name: "category", type: "text", description: "Blog category." },
      { name: "content", type: "text", description: "Blog content." },
      {
        name: "tags",
        type: "text",
        description: "Comma-separated tags it should be registered in the db.",
      },
      { name: "author", type: "string", description: "author name" },
      { name: "isArchive", type: "string", description: "status" },
      { name: "image", type: "file", description: "Image file." },
    ],
    response: {
      message: "Success",
      post: {
        id: "66ea00af7a4adb4344343a526",
        title: "National Directives Developer",
        category: "DIGITAL",
        content:
          "Strues tubineus caute benigne defero desino. Conicio vinculum animus quia fugiat magni somniculosus. Textilis voluptates eos et ambulo optio alias torrens.\nAdipisci aedificium color angelus tergiversatio autem vos stillicidium. Synagoga subnecto provident creptio id recusandae cervus cavus bestia paens. Arcesso conspergo deleo coaegresco abutor tempora deputo tergum tantillus.\nAdversus vitiosus ipsa reiciendis quis crepusculum sol valde vapulus conforto. Absconditus vobis cedo aqua tabella consectetur depulso. Admoneo absque summa ipsa amoveo repellat terminatio vigor tamen suggero.",
        tags: ["RECENT"],
        author: "Alpha",
        imageUrl: "https://od.lk/s/OTdfODc3MzQ5MDJf/0kjqyMhlwUxtrDu.png",
        isArchive: false,
        createdAt: "2024-09-17T22:20:30.849Z",
        adminId: "66e9fc3966f77a3e320b8e39",
      },
    },
  },

  {
    title: "Get All Blog Posts",
    method: "GET",
    url: "/api/v1/admin/blogs",
    description: "Retrieve all blog posts created by the admin.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    response: {
      message: "Success",
      data: [
        {
          id: "66ea00454545454331aea526",
          title: "District Branding Executive",
          category: "DIGITAL",
          content: "Content text here...",
          tags: ["TRENDING"],
          author: "Alpha",
          imageUrl: "https://od.lk/s/OTdfODc3MzMzMjRf/BAAIPeZgPquPeYq.png",
          isArchive: true,
          createdAt: "2024-09-17T22:20:30.849Z",
          adminId: "66e9fc3966f77a3e320b8e39",
          admin: {
            id: "66e9fc3966f77a3e320b8e39",
            email: "augustine32@gmail.com",
            fullName: "Frontend developer",
            description:
              "Suffragium tondeo votum abutor delectus cometes deinde. Odio decumbo repellat aer. Inflammatio vero solvo tepesco viriliter artificiose tribuo turba tristis.",
            profilePicUrl:
              "https://od.lk/s/OTdfODc3MjQ4NDVf/Y9IorEaGzGY4wOV.png",
            socialLinks: [
              '{facebook: "facebook.com"}',
              ' {insta: "instagram.com"}',
              '{pin:"pininterest.com"}',
            ],
            createdAt: "2024-09-17T22:01:29.823Z",
          },
        },
        {
          id: "66ea00af7a4adb4344343a526",
          title: "National Directives Developer",
          category: "DIGITAL",
          content: "Content text here...",
          tags: ["RECENT"],
          author: "Alpha",
          imageUrl: "https://od.lk/s/OTdfODc3MzQ5MDJf/0kjqyMhlwUxtrDu.png",
          isArchive: false,
          createdAt: "2024-09-17T22:20:30.849Z",
          adminId: "66e9fc3966f77a3e320b8e39",
          admin: {
            id: "66e9fc3966f77a3e320b8e39",
            email: "augustine32@gmail.com",
            fullName: "Frontend developer",
            description:
              "Suffragium tondeo votum abutor delectus cometes deinde. Odio decumbo repellat aer. Inflammatio vero solvo tepesco viriliter artificiose tribuo turba tristis.",
            profilePicUrl:
              "https://od.lk/s/OTdfODc3MjQ4NDVf/Y9IorEaGzGY4wOV.png",
            socialLinks: [
              '{facebook: "facebook.com"}',
              ' {insta: "instagram.com"}',
              '{pin:"pininterest.com"}',
            ],
            createdAt: "2024-09-17T22:01:29.823Z",
          },
        },
      ],
    },
    errorResponse: {
      message: "No blog posts found",
    },
  },

  {
    title: "Get Blog Post by ID",
    method: "GET",
    url: "/api/v1/admin/blog/:blogId",
    description: "Retrieve a blog post by its ID.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    response: {
      message: "Success",
      content: {
        id: "66ea00454545454331aea526",
        title: "District Branding Executive",
        category: "DIGITAL",
        content:
          "Compello tersus statua stultus perspiciatis demergo. Conqueror umquam somnus undique ex cedo stillicidium. Triumphus demum deporto ipsam usus debilito aeger illum.\nDecipio natus torqueo uberrime thesis antea titulus absque aequitas. Vomito colo avarus audeo ubi volva deorsum ulterius absens. Patria curso canto tracto.\nSubseco artificiose substantia. Allatus voluptas acquiro. Urbs damno caput audax ancilla commodo cumque vesco decipio.",
        tags: ["TRENDING"],
        author: "Alpha",
        imageUrl: "https://od.lk/s/OTdfODc3MzMzMjRf/BAAIPeZgPquPeYq.png",
        isArchive: true,
        createdAt: "2024-09-17T22:20:30.849Z",
        adminId: "66e9fc3966f77a3e320b8e39",
      },
    },
    errorResponse: {
      message: "Blog post with ID: 66e3b84145a9664169094898 not found",
    },
  },

  {
    title: "Update Blog Post",
    method: "PUT",
    url: "/api/v1/admin/blog/:postId",
    description: "Update a blog post by its ID.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    formData: [
      { name: "title", type: "text", description: "Blog post title." },
      { name: "category", type: "text", description: "Blog category." },
      { name: "content", type: "text", description: "Blog content." },
      {
        name: "tags",
        type: "text",
        description: "Comma-separated tags it should be registered in the db.",
      },
      { name: "author", type: "string", description: "author name" },
      { name: "isArchive", type: "string", description: "status" },
      { name: "image", type: "file", description: "Image file." },
    ],
    response: {
      message: "Success",
      post: {
        id: "66ea00af7a4adb4344343a526",
        title: "National Directives Developer",
        category: "DIGITAL",
        content:
          "Strues tubineus caute benigne defero desino. Conicio vinculum animus quia fugiat magni somniculosus. Textilis voluptates eos et ambulo optio alias torrens.\nAdipisci aedificium color angelus tergiversatio autem vos stillicidium. Synagoga subnecto provident creptio id recusandae cervus cavus bestia paens. Arcesso conspergo deleo coaegresco abutor tempora deputo tergum tantillus.\nAdversus vitiosus ipsa reiciendis quis crepusculum sol valde vapulus conforto. Absconditus vobis cedo aqua tabella consectetur depulso. Admoneo absque summa ipsa amoveo repellat terminatio vigor tamen suggero.",
        tags: ["RECENT"],
        author: "Alpha",
        imageUrl: "https://od.lk/s/OTdfODc3MzQ5MDJf/0kjqyMhlwUxtrDu.png",
        isArchive: false,
        createdAt: "2024-09-17T22:20:30.849Z",
        adminId: "66e9fc3966f77a3e320b8e39",
      },
    },
    errorResponse: {
      message: "blogpost with id: 66e3b84145a9664169094898 not found",
    },
  },

  {
    title: "Delete Blog Post",
    method: "DELETE",
    url: "/api/v1/admin/blog/:postId",
    description: "Delete a blog post by its ID.",
    headers: [{ name: "Authorization", description: "Bearer <JWT Token>" }],
    response: {
      message: "Post deleted successfully",
      data: "66ea00297a4adbe331aea516",
    },
    errorResponse: {
      message: "blogpost with id: 66e3b84145a9664169094898 not found",
    },
  },
];

const ApiDocCard = ({
  title,
  method,
  url,
  description,
  bodyParams,
  response,
  headers,
  formData,
  errorResponse,
}) => {
  return (
    <div className="border rounded-lg p-4 mb-6 shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mb-1">
        <span className="font-semibold">Method:</span>{" "}
        <span
          className={`text-${
            method === "POST" || method === "PUT" ? "green" : "red"
          }-600`}
        >
          {method}
        </span>
      </p>
      <p className="mb-1">
        <span className="font-semibold">URL:</span>{" "}
        <code className="bg-gray-100 p-1 rounded">{url}</code>
      </p>
      <p className="mb-3">{description}</p>

      {bodyParams && (
        <>
          <h4 className="font-semibold mb-2">Body Parameters:</h4>
          <ul className="list-disc pl-5 mb-3">
            {bodyParams.map((param, index) => (
              <li key={index}>
                <span className="font-semibold">{param.name}:</span>{" "}
                {param.type} - {param.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {headers && (
        <>
          <h4 className="font-semibold mb-2">Headers:</h4>
          <ul className="list-disc pl-5 mb-3">
            {headers.map((header, index) => (
              <li key={index}>
                <span className="font-semibold">{header.name}:</span>{" "}
                {header.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {formData && (
        <>
          <h4 className="font-semibold mb-2">Form Data:</h4>
          <ul className="list-disc pl-5 mb-3">
            {formData.map((data, index) => (
              <li key={index}>
                <span className="font-semibold">{data.name}:</span> {data.type}{" "}
                - {data.description}
              </li>
            ))}
          </ul>
        </>
      )}

      <h4 className="font-semibold mb-2">Success Response:</h4>
      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
        {JSON.stringify(response, null, 2)}
      </pre>

      {errorResponse && (
        <>
          <h4 className="font-semibold mb-2">Error Response:</h4>
          <pre className="bg-red-100 p-2 rounded text-sm">
            {JSON.stringify(errorResponse, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
};

const ApiDocumentation = () => {
  return (
    <div className="container mx-auto px-4 py-6 mt-28">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin API Documentation
      </h1>
      {apiEndpoints.map((endpoint, index) => (
        <ApiDocCard key={index} {...endpoint} />
      ))}
    </div>
  );
};

export default ApiDocumentation;
