import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../../prisma";
import { main } from "../../../../../../../prisma/connects";
import { uploadFile } from "../../../controllers/upload";
import { generateRandomString } from "../../../controllers/filename";

/**
 * @author 010binary
 * @param {NextRequest} req
 * @description Create a new Blog Post
 * @returns
 */
export const POST = async (req) => {
  const Payload = JSON.parse(req.headers.get("x-user-payload"));
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      {
        message: "Content-Type must be multipart/form-data",
      },
      { status: 400 }
    );
  }
  const formData = await req.formData();
  const title = formData.get("title");
  const category = formData.get("category");
  const content = formData.get("content");
  let tags = formData.get("tags");
  const author = formData.get("author");
  const image = formData.get("image");
  const readTime = parseInt(formData.get("readTime"));
  const isArchive = formData.get("isArchive") === "true" ? true : false;

  if (!title || !category || !content || !author || !tags || !readTime) {
    return NextResponse.json(
      {
        message: "Please provide all required fields",
        data: {
          title,
          category,
          content,
          tags,
          author,
          readTime,
          isArchive,
        },
      },
      { status: 400 }
    );
  }

  if (!image.type.startsWith("image/")) {
    return NextResponse.json(
      {
        message: "ProfilePic should be an image file",
      },
      { status: 400 }
    );
  }

  let imageExtension = image.name;

  imageExtension = imageExtension.split(".")[1];

  const buffer = Buffer.from(await image.arrayBuffer());
  const file = {
    name: generateRandomString() + `.${imageExtension}`,
    size: image.size,
    buffer: buffer,
  };

  const imageUrl = await uploadFile(
    file,
    process.env.OPENDRIVE_FOLDER_PATH,
    "images"
  );

  if (imageUrl instanceof Error) {
    return NextResponse.json(
      {
        message: "Error uploading Image to storage bucket: ",
        error: e.message,
      },
      { status: 500 }
    );
  }
  tags = tags ? tags.split(",") : [];

  try {
    await main();

    const blogPost = await prisma.BlogPost.create({
      data: {
        title,
        category,
        content,
        tags,
        imageUrl,
        author,
        readTime,
        isArchive,
        adminId: Payload.id,
      },
    });

    return NextResponse.json(
      {
        message: "Success",
        blogPost,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error in creating Blog post",
        error: e.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * @author 010binary
 * @param {NextRequest} req
 * @param {NextResponse} res
 * @returns success Json with BlogPost content
 */
export const GET = async (req, res) => {
  const PAGE_SIZE = parseInt(process.env.PAGE_SIZE);
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    await main();

    if (page == "" || page == null) {
      const content = await prisma.BlogPost.findMany({
        include: {
          admin: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = content.map((item) => {
        const newItem = { ...item };
        if (newItem.admin && newItem.admin.password) {
          delete newItem.admin.password;
        }
        return newItem;
      });

      return NextResponse.json(
        {
          message: "Success",
          data,
        },
        { status: 200 }
      );
    }

    const content = await prisma.BlogPost.findMany({
      skip: page * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        admin: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const data = content.map((item) => {
      const newItem = { ...item };
      if (newItem.admin && newItem.admin.password) {
        delete newItem.admin.password;
      }
      return newItem;
    });

    return NextResponse.json(
      {
        message: "Success",
        data,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error: ",
        e,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
