import prisma from "../../../../../prisma";
import { main } from "../../../../../prisma/connects";

/**
 * @author 010binary
 * @returns PAGE_SIZE number size for the env file
 */
const PAGE_SIZE = parseInt(process.env.PAGE_SIZE);

/**
 * @author 010binary
 * @param {string} category - The category to filter blog posts.
 * @param {number} pagenumber - The page number for pagination.
 * @param {Array} tags - The array of tags to match blog posts.
 * @returns {Promise}
 */
export const categoryAndTagFinder = async (category, pagenumber, tags) => {
  try {
    await main();

    // If no pagenumber is passed, fetch all matching posts
    if (pagenumber == null || !pagenumber) {
      const posts = await prisma.BlogPost.findMany({
        where: {
          category,
          tags: {
            hasEvery: tags,
          },
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

    // Paginated query when pagenumber is passed
    const posts = await prisma.BlogPost.findMany({
      where: {
        category,
        tags: {
          hasEvery: tags,
        },
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
