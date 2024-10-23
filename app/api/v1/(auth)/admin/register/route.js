import { NextResponse } from "next/server";
import { main } from "../../../../../../../prisma/connects";
import prisma from "../../../../../../../prisma";
import bcrypt from "bcrypt";
import { signToken } from "../../../../../../../utils/jwt";

export const POST = async (req, res) => {
  const { email, password, fullName } = await req.json();

  if (!email || !password || !fullName) {
    return NextResponse.json(
      { message: "Email, Fullname and password  are required!" },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { message: "Password must be at least 6 characters" },
      { status: 400 }
    );
  }

  try {
    await main();

    //create salt and password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // check if email already exists
    const existingAdmin = await prisma.Admin.findUnique({
      where: {
        email: email,
      },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin already exists with this email" },
        { status: 400 }
      );
    }

    const Admin = await prisma.Admin.create({
      data: {
        email: email,
        fullName: fullName,
        password: hashedPassword,
      },
    });

    // sign token
    const token = await signToken({
      id: Admin.id,
      email: Admin.email,
      role: "admin",
    });

    delete Admin.password;
    return NextResponse.json(
      {
        message: "Admin created successfully",
        data: {
          Admin,
          token,
        },
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error in creating Admin: ",
        error: e.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
