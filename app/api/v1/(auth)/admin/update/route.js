import { NextResponse } from "next/server";
import { main } from "../../../../../../../prisma/connects";
import prisma from "../../../../../../../prisma";
import { uploadFile } from "../../../controllers/upload";
import { generateRandomString } from "../../../controllers/filename";
import { deleteFile } from "../../../controllers/delete";

const moveImageToTrash = async (id) => {
  try {
    // Fetch the admin data by id
    const admin = await prisma.Admin.findUnique({
      where: {
        id: id,
      },
    });

    // If the admin has a profilePicUrl, proceed to delete it
    if (admin && admin.profilePicUrl) {
      const getName = admin.profilePicUrl;
      const name = getName.split("/").pop(); // Get the file name from the URL

      // Call the deleteFile function to move the file to the trash
      const moved = await deleteFile(name, process.env.OPENDRIVE_PROFILE_PATH);

      return moved;
    }

    return;
  } catch (error) {
    // If there's an error, return a response with the error message
    return NextResponse.json(
      {
        message: "Error while moving image to trash",
        error,
      },
      {
        status: 500,
      }
    );
  } finally {
    // Ensure the Prisma connection is closed
    await prisma.$disconnect();
  }
};

export const GET = async (req) => {
  const Payload = JSON.parse(req.headers.get("x-user-payload"));

  try {
    await main();

    const admin = await prisma.Admin.findUnique({
      where: {
        id: Payload.id,
      },
    });

    if (!admin)
      return NextResponse.json(
        { message: `admin with id: ${id} not found` },
        { status: 404 }
      );

    delete admin.password;
    return NextResponse.json({
      message: "success",
      data: admin,
    });
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

export const PUT = async (req) => {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      {
        message: "Content-Type must be multipart/form-data",
      },
      { status: 400 }
    );
  }

  const Payload = JSON.parse(req.headers.get("x-user-payload"));

  const formData = await req.formData();
  const email = formData.get("email");
  const fullName = formData.get("fullName");
  const description = formData.get("description");
  let socialLinks = formData.get("socialLinks");
  const profilePic = formData.get("profilePic");

  if (!email || !fullName || !description || !socialLinks) {
    return NextResponse.json(
      {
        message: "All fields should be filled",
      },
      { status: 400 }
    );
  }

  let profilePicUrl = "";
  if (typeof profilePic === "object" && profilePic.type.startsWith("image/")) {
    // If profilePic is an image file, process and upload it
    let imageExtension = profilePic.name.split(".").pop();
    const buffer = Buffer.from(await profilePic.arrayBuffer());
    const file = {
      name: generateRandomString() + `.${imageExtension}`,
      size: profilePic.size,
      buffer: buffer,
    };

    // Move old profile image to trash
    await moveImageToTrash(Payload.id);

    // Upload new profile image
    profilePicUrl = await uploadFile(
      file,
      process.env.OPENDRIVE_FOLDER_PATH,
      "profile"
    );

    if (profilePicUrl instanceof Error) {
      return NextResponse.json(
        {
          message: "Error uploading Image to storage bucket: ",
          error: profilePicUrl.message,
        },
        { status: 500 }
      );
    }
  } else if (typeof profilePic === "string" && profilePic.startsWith("http")) {
    // If profilePic is a URL, use it directly
    profilePicUrl = profilePic;
  } else {
    return NextResponse.json(
      {
        message: "ProfilePic should be an image file or a valid URL",
      },
      { status: 400 }
    );
  }

  socialLinks = socialLinks ? socialLinks.split(",") : [];

  try {
    await main();

    const admin = await prisma.Admin.findUnique({
      where: {
        id: Payload.id,
      },
    });

    if (!admin)
      return NextResponse.json(
        { message: `Admin with id: ${Payload.id} not found` },
        { status: 404 }
      );

    const updateUser = await prisma.Admin.update({
      where: {
        id: Payload.id,
      },
      data: {
        email: email,
        fullName: fullName,
        description: description,
        socialLinks: socialLinks,
        profilePicUrl: profilePicUrl,
      },
    });

    // Delete password before sending response
    delete updateUser.password;
    return NextResponse.json({
      message: "Success",
      data: updateUser,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error Updating Admin",
        error: e.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
