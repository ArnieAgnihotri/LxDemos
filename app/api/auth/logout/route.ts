import { type NextRequest, NextResponse } from "next/server"
import { removeTokenCookie } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    // Remove token cookie
    removeTokenCookie()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 })
  }
}

