import { type NextRequest, NextResponse } from "next/server"
import { createUser, findUserByEmail } from "@/lib/db"
import { createToken, setTokenCookie } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json()

    // Validate input
    if (!email || !name || !password) {
      return NextResponse.json({ error: "Email, name, and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Create new user
    const newUser = await createUser({
      email,
      name,
      password,
      role: "user",
    })

    // Create JWT token
    const token = await createToken({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    })

    // Set token in cookie
    setTokenCookie(token)

    // Return user data (without password)
    return NextResponse.json({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}

