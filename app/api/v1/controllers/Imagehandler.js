import prisma from "../../../../../prisma";
import { main } from "../../../../../prisma/connects";
import { deleteFile } from "./delete";
import { generateRandomString } from "./filename";
import { uploadFile } from "./upload";

export const moveBlogImageToTrash = async (id) => {
  try {
    await main();
    const post = await prisma.BlogPost.findUnique({
      where: {
        id,
      },
    });

    // if false, it's their first image, so return
    if (!post.imageUrl) {
      return;
    }

    // Get the file name from the imageUrl
    const getName = post.imageUrl;
    const name = getName.split("/").pop();

    // Delete the file from storage
    const moved = await deleteFile(name, process.env.OPENDRIVE_IMAGE_PATH);

    return moved;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};

export const imageHandler = async (image, id) => {
  let imageExtension = image.name.split(".")[1];

  const buffer = Buffer.from(await image.arrayBuffer());
  const file = {
    name: generateRandomString() + `.${imageExtension}`,
    size: image.size,
    buffer: buffer,
  };

  // Move the previous image to trash
  const deleteImage = await moveBlogImageToTrash(id);

  if (deleteImage instanceof Error) {
    return deleteImage.message;
  }

  // Upload new image
  const imageUrl = await uploadFile(
    file,
    process.env.OPENDRIVE_FOLDER_PATH,
    "images"
  );

  if (imageUrl instanceof Error) {
    return imageUrl.message;
  }

  return imageUrl;
};
