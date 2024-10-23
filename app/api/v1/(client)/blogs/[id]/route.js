import { main } from "../../../../../../../prisma/connects";
import prisma from "../../../../../../../prisma";
import { NextResponse } from "next/server";

/**
 * @author 010binary
 * @param {NextRequest} req
 * @param {NextResponse} res
 * @returns success Json with BlogPost content
 */
export const GET = async (req, res) => {
  try {
    const id = req.url.split("/blogs/")[1];
    await main();

    // db query
    const content = await prisma.BlogPost.findUnique({
      where: {
        id,
        isArchive : false
      },
      include: {
        admin: true,
      },
    });

    // check for Null situations and return 404
    if (!content)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });

    // Remove password if admin exists and has a password
    if (content.admin && content.admin.password) {
      delete content.admin.password;
    }

    return NextResponse.json(
      {
        message: "Success",
        content,
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
