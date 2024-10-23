import { NextResponse } from "next/server";
import { tagfinder } from "../../controllers/tagfinder";
import { categoryfinder } from "../../controllers/categoryfinder";
import { categoryAndTagFinder } from "../../controllers/categoryAndTagfinder";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const tags = searchParams.get("tags");
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  if (!category && !tags) {
    return NextResponse.json(
      { message: "Query parameters are missing.", error: "bad request" },
      { status: 400 }
    );
  }

  if (tags && !category) {
    const arr = tags.split(" ");
    const blogPost = await tagfinder(arr, page);
    return blogPost instanceof Error
      ? NextResponse.json(
          {
            message: `${arr} is not defined in the database`,
          },
          { status: 404 }
        )
      : NextResponse.json({ message: "success", blogPost }, { status: 200 });
  }

  if (category && !tags) {
    const blogPost = await categoryfinder(category, page);
    return blogPost instanceof Error
      ? NextResponse.json(
          {
            message: `${category} is not defined in the database`,
          },
          { status: 404 }
        )
      : NextResponse.json({ message: "success", blogPost }, { status: 200 });
  }

  if (category && tags) {
    const arr = tags.split(" ");
    const blogPost = await categoryAndTagFinder(category, page, arr);
    return blogPost instanceof Error
      ? NextResponse.json(
          {
            message: `${arr} or ${category} is not defined in the database`,
            error: blogPost.message,
          },
          { status: 404 }
        )
      : NextResponse.json({ message: "success", blogPost }, { status: 200 });
  }
};
