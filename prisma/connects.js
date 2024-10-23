import prisma from "./index";

export async function main() {
  try {
    await prisma.$connect();
  } catch (e) {
    return Error(`Database connection unsuccessful: ${e.message}`);
  }
}
