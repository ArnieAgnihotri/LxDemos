import { type NextRequest, NextResponse } from "next/server"
import { isAuthenticated } from "@/lib/auth"
import { updateUserLastViewed } from "@/lib/db"

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated
    const user = await isAuthenticated(req)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { configId } = await req.json()

    // Validate input
    if (!configId) {
      return NextResponse.json({ error: "Configuration ID is required" }, { status: 400 })
    }

    // Update user's last viewed configuration
    const updatedUser = await updateUserLastViewed(user.id, configId)
    if (!updatedUser) {
      return NextResponse.json({ error: "Failed to update last viewed configuration" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Update last viewed error:", error)
    return NextResponse.json({ error: "Failed to update last viewed configuration" }, { status: 500 })
  }
}

