import type { NextRequest } from "next/server"
import { SignJWT, jwtVerify } from "jose"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"

// Secret key for JWT signing - in production, use a proper secret management system
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-at-least-32-characters-long")

export interface UserData {
  id: string
  email: string
  name: string
  role: string
}

// Hash password using bcrypt
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

// Compare password with hashed password
export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

// Create JWT token
export async function createToken(user: UserData): Promise<string> {
  const token = await new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d") // Token expires in 7 days
    .sign(JWT_SECRET)

  return token
}

// Verify JWT token
export async function verifyToken(token: string): Promise<UserData | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as UserData
  } catch (error) {
    return null
  }
}

// Set JWT token in cookies
export function setTokenCookie(token: string) {
  cookies().set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "strict",
  })
}

// Get JWT token from cookies
export function getTokenCookie() {
  return cookies().get("auth_token")?.value
}

// Remove JWT token from cookies
export function removeTokenCookie() {
  cookies().delete("auth_token")
}

// Middleware to check if user is authenticated
export async function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value

  if (!token) {
    return null
  }

  return await verifyToken(token)
}

// Get current user from server component
export async function getCurrentUser(): Promise<UserData | null> {
  const token = getTokenCookie()

  if (!token) {
    return null
  }

  return await verifyToken(token)
}

