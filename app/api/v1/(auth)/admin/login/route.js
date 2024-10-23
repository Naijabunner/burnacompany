import { NextResponse } from "next/server";
import { main } from "../../../../../../../prisma/connects";
import prisma from "../../../../../../../prisma";
import bcrypt from "bcrypt";
import { signToken } from "../../../../../../../utils/jwt";

export const POST = async (req, res) => {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required!" },
      { status: 400 }
    );
  }

  try {
    await main();

    const Admin = await prisma.Admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!Admin) {
      return NextResponse.json(
        { message: "Admin not found!" },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, Admin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password!" },
        { status: 400 }
      );
    }

    const token = await signToken({
      id: Admin.id,
      email: Admin.email,
      role: "admin",
    });

    delete Admin.password;
    return NextResponse.json(
      {
        message: "Admin logged in successfully",
        data: Admin,
        token,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error during login: ",
        error: e.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
