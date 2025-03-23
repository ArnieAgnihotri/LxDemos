import { type NextRequest, NextResponse } from "next/server"
import { isAuthenticated } from "@/lib/auth"
import { findUserById } from "@/lib/db"

export async function GET(req: NextRequest) {
  try {
    // Check if user is authenticated
    const user = await isAuthenticated(req)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user's last viewed configuration
    const userData = await findUserById(user.id)
    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ configId: userData.lastViewed || null })
  } catch (error) {
    console.error("Get last viewed error:", error)
    return NextResponse.json({ error: "Failed to get last viewed configuration" }, { status: 500 })
  }
}

