import prisma from "../../../../../prisma";
import { main } from "../../../../../prisma/connects";

/**
 * @author 010binary
 * @returns PAGE_SIZE number size for the env file
 */
const PAGE_SIZE = parseInt(process.env.PAGE_SIZE);

/**
 * @author 010binary
 * @param {string} category
 * @param {number} pagenumber
 * @returns {Promise}
 */
export const categoryfinder = async (category, pagenumber) => {
  try {
    await main();

    // paginate if the pagenumber is passed
    if (pagenumber == null || !pagenumber) {
      const posts = await prisma.BlogPost.findMany({
        where: {
          category,
          isArchive: false,
        },
        include: {
          admin: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      const data = posts.map((item) => {
        const newItem = { ...item };
        if (newItem.admin && newItem.admin.password) {
          delete newItem.admin.password;
        }
        return newItem;
      });

      return data;
    }

    // returns all blog with the category
    const posts = await prisma.BlogPost.findMany({
      where: {
        category,
        isArchive: false,
      },
      skip: pagenumber * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        admin: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const data = posts.map((item) => {
      const newItem = { ...item };
      if (newItem.admin && newItem.admin.password) {
        delete newItem.admin.password;
      }
      return newItem;
    });

    return data;
  } catch (e) {
    return new Error(e);
  } finally {
    await prisma.$disconnect();
  }
};
