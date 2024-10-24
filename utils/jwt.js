import { SignJWT, jwtVerify } from "jose";

export async function signToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: process.env.ALGO })
    .setExpirationTime("5d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch (error) {
    return error;
  }
}
