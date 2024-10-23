import prisma from "../../../../../prisma";
import { main } from "../../../../../prisma/connects";

/**
 * @author 010binary
 * @returns PAGE_SIZE number size for the env file
 */
const PAGE_SIZE = parseInt(process.env.PAGE_SIZE);

/**
 * @author 010binary
 * @param {Array} tags
 * @param {Number} pagenumber
 * @description This function is used to find blog posts by tags.
 * @returns {Promise}
 */
export const tagfinder = async (tags, pagenumber) => {
  try {
    await main();

    // paginate if the pagenumber is passed
    if (pagenumber == null || !pagenumber) {
      const posts = await prisma.BlogPost.findMany({
        where: {
          isArchive: false,
          tags: {
            hasEvery: tags,
          },
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

    // returns all with the tag
    const posts = await prisma.BlogPost.findMany({
      where: {
        isArchive: false,
        tags: {
          hasEvery: tags,
        },
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
