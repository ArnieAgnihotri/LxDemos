"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, X, TerminalIcon } from "lucide-react"

export default function Terminal({ initialCommand, fullScreen = false }) {
  const terminalRef = useRef<HTMLDivElement>(null)
  const xtermRef = useRef<any>(null)
  const webSocketRef = useRef<WebSocket | null>(null)
  const fitAddonRef = useRef<any>(null)
  const [isFullScreen, setIsFullScreen] = useState(fullScreen)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Initialize xterm.js and connect to the ttyd WebSocket server
  useEffect(() => {
    const loadTerminal = async () => {
      try {
        // Import xterm modules dynamically
        const { Terminal } = await import("xterm")
        const { FitAddon } = await import("xterm-addon-fit")
        const { WebLinksAddon } = await import("xterm-addon-web-links")

        // Create terminal instance
        const term = new Terminal({
          cursorBlink: true,
          fontSize: 14,
          fontFamily: "Menlo, Monaco, 'Courier New', monospace",
          theme: {
            background: "#1a1a1a",
            foreground: "#f8f8f8",
            cursor: "#f8f8f8",
            selectionBackground: "#5a5a5a",
          },
        })

        // Create and load the fit addon
        const fitAddon = new FitAddon()
        term.loadAddon(fitAddon)

        // Load web links addon
        term.loadAddon(new WebLinksAddon())

        // Store references
        xtermRef.current = term
        fitAddonRef.current = fitAddon

        // Open the terminal in the container
        if (terminalRef.current) {
          term.open(terminalRef.current)
          fitAddon.fit()

          // Show connecting message
          term.writeln("\x1b[1;33mConnecting to terminal server...\x1b[0m")

          // Connect to WebSocket server (ttyd)
          connectToWebSocket(term)
        }
      } catch (error) {
        console.error("Failed to load terminal:", error)
        setErrorMessage("Failed to load terminal components.")
        setIsLoading(false)
      }
    }

    if (typeof window !== "undefined") {
      // Load terminal CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdn.jsdelivr.net/npm/xterm@5.1.0/css/xterm.min.css"
      document.head.appendChild(link)

      // Load terminal
      loadTerminal()
    }

    // Cleanup on unmount
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close()
      }
      if (xtermRef.current) {
        xtermRef.current.dispose()
      }
    }
  }, [])

  // Connect to WebSocket server
  const connectToWebSocket = (term) => {
    // Get backend URL from environment or use a default with port 7681 (common ttyd port)
    const ttydHost = process.env.NEXT_PUBLIC_TTYD_HOST || "localhost"
    const ttydPort = process.env.NEXT_PUBLIC_TTYD_PORT || "7681"
    const ttydProtocol = window.location.protocol === "https:" ? "wss" : "ws"
    const backendUrl = `${ttydProtocol}://${ttydHost}:${ttydPort}`

    try {
      console.log(`Connecting to ttyd server at ${backendUrl}`)
      const ws = new WebSocket(backendUrl)
      webSocketRef.current = ws

      // Set up connection events and handlers
      setupWebSocketEvents(ws, term)
    } catch (error) {
      console.error("WebSocket connection error:", error)
      term.writeln("\x1b[1;31mFailed to connect to terminal server at " + backendUrl + "\x1b[0m")
      term.writeln("\x1b[1;31mUsing simulated terminal mode instead.\x1b[0m")

      // Fall back to simulation mode
      simulateTtydConnection(term)
    }
  }

  // Set up WebSocket event handlers
  const setupWebSocketEvents = (ws, term) => {
    ws.binaryType = "arraybuffer"

    ws.onopen = () => {
      setIsConnected(true)
      setIsLoading(false)
      term.writeln("\x1b[1;32mConnected to ttyd terminal server!\x1b[0m")
      term.writeln("\x1b[1;32mRunning Debian GNU/Linux on Docker\x1b[0m")
      term.writeln("")

      // Set up terminal input to send to server
      term.onData((data) => {
        if (ws.readyState === WebSocket.OPEN) {
          // ttyd expects binary WebSocket frames
          const encoder = new TextEncoder()
          const buffer = encoder.encode(data)
          ws.send(buffer)
        }
      })

      // Send initial command if provided
      if (initialCommand) {
        const encoder = new TextEncoder()
        ws.send(encoder.encode(initialCommand + "\n"))
      }
    }

    ws.onmessage = (event) => {
      // Handle binary data from ttyd
      if (event.data instanceof ArrayBuffer) {
        const decoder = new TextDecoder()
        const text = decoder.decode(event.data)
        term.write(text)
      } else {
        term.write(event.data)
      }
    }

    ws.onclose = () => {
      setIsConnected(false)
      term.writeln("\x1b[1;31mDisconnected from terminal server.\x1b[0m")
      term.writeln("\x1b[1;33mReconnecting in 3 seconds...\x1b[0m")

      // Try to reconnect after a delay
      setTimeout(() => {
        if (terminalRef.current && xtermRef.current) {
          xtermRef.current.writeln("\x1b[1;33mAttempting to reconnect...\x1b[0m")
          connectToWebSocket(xtermRef.current)
        }
      }, 3000)
    }

    ws.onerror = (error) => {
      console.error("WebSocket error:", error)
      term.writeln("\x1b[1;31mError: Connection to terminal server failed.\x1b[0m")
    }
  }

  // Simulate ttyd connection for demo purposes
  const simulateTtydConnection = (term) => {
    setIsLoading(false)

    term.writeln("\x1b[1;33mNOTE: Using simulated terminal mode\x1b[0m")
    term.writeln("\x1b[1;32mWelcome to LxDemos Terminal (Simulation Mode)\x1b[0m")
    term.writeln("\x1b[1;32mRunning Debian GNU/Linux 11 (bullseye)\x1b[0m")
    term.writeln("")
    term.write("user@lxdemos:~$ ")

    // Set up simulated command handling
    const simulatedCommands = {
      ls: "app\ncomponents\nlib\nnode_modules\npackage.json\ntsconfig.json",
      pwd: "/home/user",
      whoami: "user",
      date: new Date().toString(),
      "uname -a": "Linux lxdemos 5.10.0-26-amd64 #1 SMP Debian 5.10.197-1 (2023-09-29) x86_64 GNU/Linux",
      "cat /etc/os-release":
        'PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"\nNAME="Debian GNU/Linux"\nVERSION_ID="11"\nVERSION="11 (bullseye)"\nVERSION_CODENAME=bullseye\nID=debian\nHOME_URL="https://www.debian.org/"\nSUPPORT_URL="https://www.debian.org/support"\nBUG_REPORT_URL="https://bugs.debian.org/"',
      neofetch:
        '       _,met$$$$$gg.           user@lxdemos\n    ,g$$$$$$$$$$$$$$$P.        --------------\n  ,g$$P"     """Y$$.".        OS: Debian GNU/Linux 11 (bullseye) x86_64\n ,$$P\'              `$$$.      Kernel: 5.10.0-26-amd64\n\',$$P       ,ggs.     `$$b:    Uptime: 2 hours, 34 mins\n`d$$\'     ,$P"\'   .    $$$     Packages: 1622 (dpkg)\n $$P      d$\'     ,    $$P     Shell: bash 5.1.4\n $$:      $$.   -    ,d$$\'     Terminal: xterm-256color\n $$;      Y$b._   _,d$P\'       CPU: Intel Core i7-10700K (8) @ 3.800GHz\n Y$$.    `.`"Y$$$$P"\'          Memory: 1024MiB / 8192MiB\n `$$b      "-.__\n  `Y$$\n   `Y$$.                        \n     `$$b.\n       `Y$$b.\n          `"Y$b._\n              `""""',
    }

    // Simple command history
    const commandHistory = []
    let historyIndex = -1
    let currentLine = ""

    term.onKey(({ key, domEvent }) => {
      const charCode = domEvent.keyCode

      if (charCode === 13) {
        // Enter key
        term.writeln("") // New line
        const command = currentLine.trim()

        if (command) {
          // Add to history
          commandHistory.push(command)
          historyIndex = commandHistory.length

          // Process command
          if (command.startsWith("echo ")) {
            term.writeln(command.substring(5))
          } else if (command === "clear") {
            term.clear()
          } else {
            // Check for simulated commands
            let output = simulatedCommands[command]

            // Try partial commands
            if (!output) {
              Object.keys(simulatedCommands).forEach((cmd) => {
                if (command.startsWith(cmd + " ")) {
                  if (cmd === "echo") {
                    output = command.substring(cmd.length + 1)
                  }
                }
              })
            }

            // If no match found
            if (!output) {
              term.writeln(`bash: ${command}: command not found`)
            } else {
              term.writeln(output)
            }
          }
        }

        currentLine = ""
        term.write("user@lxdemos:~$ ")
      } else if (charCode === 8) {
        // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.substring(0, currentLine.length - 1)
          term.write("\b \b")
        }
      } else if (charCode === 38) {
        // Up arrow - history
        if (historyIndex > 0) {
          historyIndex--
          // Clear current line
          term.write("\r\x1b[K" + "user@lxdemos:~$ ")
          currentLine = commandHistory[historyIndex]
          term.write(currentLine)
        }
      } else if (charCode === 40) {
        // Down arrow - history
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++
          // Clear current line
          term.write("\r\x1b[K" + "user@lxdemos:~$ ")
          currentLine = commandHistory[historyIndex]
          term.write(currentLine)
        } else if (historyIndex === commandHistory.length - 1) {
          historyIndex = commandHistory.length
          // Clear current line
          term.write("\r\x1b[K" + "user@lxdemos:~$ ")
          currentLine = ""
        }
      } else if (key.length === 1 && !domEvent.ctrlKey && !domEvent.altKey && !domEvent.metaKey) {
        currentLine += key
        term.write(key)
      }
    })

    // Execute initial command if provided
    if (initialCommand) {
      term.writeln(initialCommand)

      if (initialCommand in simulatedCommands) {
        term.writeln(simulatedCommands[initialCommand])
      } else if (initialCommand.startsWith("echo ")) {
        term.writeln(initialCommand.substring(5))
      } else {
        term.writeln(`bash: ${initialCommand}: command not found`)
      }

      term.write("user@lxdemos:~$ ")
    }
  }

  // Handle window resize to adjust terminal size
  useEffect(() => {
    const handleResize = () => {
      if (fitAddonRef.current) {
        setTimeout(() => {
          fitAddonRef.current.fit()
        }, 100)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Adjust fit after fullscreen/minimize changes
  useEffect(() => {
    if (!isMinimized && fitAddonRef.current) {
      setTimeout(() => {
        fitAddonRef.current.fit()
      }, 100)
    }
  }, [isFullScreen, isMinimized])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <Card
      className={`relative overflow-hidden bg-gray-900 transition-all duration-300 ${
        isFullScreen
          ? "fixed inset-0 z-50 m-0 h-screen w-screen rounded-none"
          : isMinimized
            ? "h-12 w-full"
            : "h-80 w-full"
      }`}
    >
      <div className="flex h-12 items-center justify-between bg-gray-800 px-4">
        <div className="flex items-center">
          <TerminalIcon className="mr-2 h-5 w-5 text-red-500" />
          <h3 className="font-medium">
            Debian Terminal {isConnected ? "(Connected)" : isLoading ? "(Connecting...)" : "(Simulation)"}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-white"
            onClick={toggleMinimize}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-white"
            onClick={toggleFullScreen}
          >
            {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          {isFullScreen && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white"
              onClick={toggleFullScreen}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {!isMinimized && (
        <div
          ref={terminalRef}
          className={`h-full w-full overflow-hidden ${isLoading ? "flex items-center justify-center" : ""}`}
        >
          {isLoading && !errorMessage && <div className="text-gray-400">Connecting to terminal server...</div>}
          {errorMessage && <div className="text-red-400">{errorMessage}</div>}
        </div>
      )}
    </Card>
  )
}

