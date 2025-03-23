import { NextResponse } from "next/server"

// This endpoint serves as a proxy between the client and the ttyd WebSocket server
// In a production environment, this would be replaced with direct WebSocket connections

export async function POST(request) {
  try {
    const { command } = await request.json()

    // Get the ttyd server URL from environment variables
    const ttydHost = process.env.TTYD_HOST || "localhost"
    const ttydPort = process.env.TTYD_PORT || "7681"
    const ttydUrl = `http://${ttydHost}:${ttydPort}`

    console.log(`Proxying command to ttyd server at ${ttydUrl}`)

    // In a real implementation, you would:
    // 1. Connect to the ttyd server via WebSocket
    // 2. Send the command
    // 3. Receive the response
    // 4. Return the response to the client

    // For now, we'll simulate a response
    const mockResponses = {
      ls: "app\ncomponents\nlib\nnode_modules\npackage.json\ntsconfig.json",
      pwd: "/home/user",
      whoami: "user",
      date: new Date().toString(),
      echo: command.replace("echo ", ""),
      "cat /etc/os-release":
        'PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"\n' +
        'NAME="Debian GNU/Linux"\n' +
        'VERSION_ID="11"\n' +
        'VERSION="11 (bullseye)"\n' +
        "VERSION_CODENAME=bullseye\n" +
        "ID=debian\n" +
        'HOME_URL="https://www.debian.org/"\n' +
        'SUPPORT_URL="https://www.debian.org/support"\n' +
        'BUG_REPORT_URL="https://bugs.debian.org/"',
      "uname -a": "Linux lxdemos 5.10.0-26-amd64 #1 SMP Debian 5.10.197-1 (2023-09-29) x86_64 GNU/Linux",
    }

    // Default response for unknown commands
    let response = `Command not found: ${command}`

    // Check if the command starts with a known command
    for (const key in mockResponses) {
      if (command === key || command.startsWith(`${key} `)) {
        response = mockResponses[key]
        break
      }
    }

    return NextResponse.json({ output: response })
  } catch (error) {
    console.error("Error processing terminal command:", error)
    return NextResponse.json({ error: "Failed to process command" }, { status: 500 })
  }
}

