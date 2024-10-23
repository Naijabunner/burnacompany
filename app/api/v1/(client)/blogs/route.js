import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma";
import { main } from "../../../../../../prisma/connects";

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
        where: {
          isArchive: false,
        },
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
      where: {
        isArchive: false,
      },
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
