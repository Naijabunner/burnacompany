import prisma from "../../../../../../../../prisma";
import { NextResponse } from "next/server";
import { main } from "../../../../../../../../prisma/connects";
import { imageHandler, moveBlogImageToTrash } from "@/app/api/v1/controllers/Imagehandler";

export const GET = async (req) => {
  const id = req.url.split("/blog/")[1];

  try {
    await main();

    const content = await prisma.BlogPost.findUnique({
      where: {
        id,
      },
    });

    if (!content)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });

    return NextResponse.json(
      {
        message: "Success",
        content,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
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
export const PUT = async (req, res) => {
  const contentType = req.headers.get("content-type") || "";
  const id = req.url.split("/blog/")[1]; // Extract blog ID from URL

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      { message: "Content-Type must be multipart/form-data" },
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
  const isArchive = formData.get("isArchive") === "true";

  // Validate required fields
  if (!title || !category || !content || !author || !tags || !readTime) {
    return NextResponse.json(
      {
        message: "Please provide all required fields",
        data: { title, category, content, tags, author, readTime, isArchive },
      },
      { status: 400 }
    );
  }

  let imageUrl = "";

  // Handle image uploading or URL usage
  if (typeof image === "object" && image.type.startsWith("image/")) {
    imageUrl = await imageHandler(image, id); // Call the image handler
  } else if (typeof image === "string" && image.startsWith("http")) {
    imageUrl = image;
  } else {
    return NextResponse.json(
      { message: "Invalid image format" },
      { status: 400 }
    );
  }

  tags = tags ? tags.split(",") : [];

  try {
    await main();

    // Check if the blog post exists
    const existingPost = await prisma.BlogPost.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json(
        { message: `Blog post with ID: ${id} not found` },
        { status: 404 }
      );
    }

    // Update the blog post with the new data
    const updatedPost = await prisma.BlogPost.update({
      where: { id },
      data: {
        title,
        category,
        content,
        tags,
        imageUrl,
        author,
        readTime,
        isArchive,
      },
    });

    return NextResponse.json(
      { message: "Success", post: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * @author 010binary
 * @param {NextRequest} req
 * @param {NextResponse} res
 * @returns success Json with the deleted BlogPost content
 */
export const DELETE = async (req) => {
  try {
    // getting the id from the URL
    const id = req.url.split("/blog/")[1];

    await main();

    // Check if the post exists
    const checking = await prisma.BlogPost.findUnique({
      where: {
        id,
      },
    });

    // check for Null situations and return 404
    if (!checking)
      return NextResponse.json(
        { message: `blogpost with id: ${id} not found` },
        { status: 404 }
      );

    await moveBlogImageToTrash(id);

    const post = await prisma.BlogPost.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Post deleted successfully",
        data: post.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
};
