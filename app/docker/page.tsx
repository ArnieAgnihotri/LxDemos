"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Terminal, Server } from "lucide-react"
import { useState } from "react"

export default function DockerPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Docker Setup for Terminal</h1>
        <p className="mb-8 text-lg text-gray-300">
          Instructions for setting up the Docker backend with ttyd for the terminal emulator.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <p className="mb-4 text-gray-300">
              The terminal emulator requires a Docker container running Debian with ttyd installed. Follow these steps
              to get started:
            </p>
            <ol className="mb-6 list-decimal space-y-2 pl-5 text-gray-300">
              <li>Clone the repository with the Docker configuration</li>
              <li>Build and run the Docker container</li>
              <li>Configure the environment variables to point to your ttyd server</li>
              <li>Enjoy a real terminal experience in your browser</li>
            </ol>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Server className="mr-2 h-4 w-4" /> Run Docker Container
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Terminal className="mr-2 h-4 w-4" /> Test Connection
              </Button>
            </div>
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">System Requirements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Server Requirements</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-300">
                  <li>Docker installed</li>
                  <li>At least 1GB RAM</li>
                  <li>10GB free disk space</li>
                  <li>Network access for WebSocket connections</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Client Requirements</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-300">
                  <li>Modern web browser with WebSocket support</li>
                  <li>JavaScript enabled</li>
                  <li>Network access to the ttyd server</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Security Considerations</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-300">
                  <li>Use HTTPS for secure connections</li>
                  <li>Implement authentication for ttyd</li>
                  <li>Restrict access using firewall rules</li>
                  <li>Run container as non-root user</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-12 bg-gray-900">
          <Tabs defaultValue="dockerfile">
            <TabsList className="bg-gray-800 p-0">
              <TabsTrigger value="dockerfile">Dockerfile</TabsTrigger>
              <TabsTrigger value="compose">Docker Compose</TabsTrigger>
              <TabsTrigger value="run">Run Commands</TabsTrigger>
              <TabsTrigger value="env">Environment Variables</TabsTrigger>
            </TabsList>
            <TabsContent value="dockerfile" className="p-6">
              <DockerfileTab />
            </TabsContent>
            <TabsContent value="compose" className="p-6">
              <DockerComposeTab />
            </TabsContent>
            <TabsContent value="run" className="p-6">
              <RunCommandsTab />
            </TabsContent>
            <TabsContent value="env" className="p-6">
              <EnvVariablesTab />
            </TabsContent>
          </Tabs>
        </Card>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Connection Diagram</h2>
          <Card className="bg-gray-900 p-6">
            <div className="mx-auto max-w-3xl">
              <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm">
                {`
┌─────────────────┐     WebSocket     ┌─────────────────┐     TTY     ┌─────────────────┐
│                 │    Connection      │                 │   Process    │                 │
│  Browser        │◄─────────────────►│  ttyd Server    │◄───────────►│  Bash Shell     │
│  (xterm.js)     │   (ws://host:7681) │  (Docker)       │             │  (Debian)       │
└─────────────────┘                    └─────────────────┘             └─────────────────┘
                `.trim()}
              </pre>
              <p className="mt-4 text-center text-gray-300">
                The browser connects to the ttyd server via WebSocket, which then relays terminal I/O to a Bash shell
                running in the Docker container.
              </p>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Troubleshooting</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-lg font-semibold">Common Issues</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">Connection refused</span> - Check if the Docker container is running and
                  the port is exposed
                </li>
                <li>
                  <span className="font-medium">WebSocket error</span> - Ensure your browser supports WebSockets and
                  check for network issues
                </li>
                <li>
                  <span className="font-medium">CORS errors</span> - Configure ttyd with proper CORS headers
                </li>
                <li>
                  <span className="font-medium">Slow performance</span> - Check network latency and server resources
                </li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-lg font-semibold">Getting Help</h3>
              <p className="mb-4 text-gray-300">
                If you encounter issues setting up the Docker container or connecting to ttyd, you can:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>Check the Docker logs for error messages</li>
                <li>Visit the ttyd GitHub repository for documentation</li>
                <li>Join our Discord community for support</li>
                <li>Open an issue on our GitHub repository</li>
              </ul>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Terminal className="mr-2 h-4 w-4" /> View Documentation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function DockerfileTab() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerfileContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h3 className="text-lg font-semibold">Dockerfile</h3>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="mr-1 h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="mr-1 h-3 w-3" /> Copy
            </>
          )}
        </Button>
      </div>
      <pre className="max-h-[400px] overflow-auto rounded bg-gray-800 p-4 text-sm">
        <code>{dockerfileContent}</code>
      </pre>
      <p className="mt-4 text-sm text-gray-400">
        This Dockerfile creates a Debian-based container with ttyd and common Linux tools installed. Save this as{" "}
        <code className="rounded bg-gray-800 px-1">Dockerfile</code> in your project directory.
      </p>
    </div>
  )
}

function DockerComposeTab() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerComposeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h3 className="text-lg font-semibold">Docker Compose</h3>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="mr-1 h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="mr-1 h-3 w-3" /> Copy
            </>
          )}
        </Button>
      </div>
      <pre className="max-h-[400px] overflow-auto rounded bg-gray-800 p-4 text-sm">
        <code>{dockerComposeContent}</code>
      </pre>
      <p className="mt-4 text-sm text-gray-400">
        This Docker Compose file simplifies the process of building and running the container. Save this as{" "}
        <code className="rounded bg-gray-800 px-1">docker-compose.yml</code> in your project directory.
      </p>
    </div>
  )
}

function RunCommandsTab() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Running the Container</h3>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-medium">Using Docker Compose (Recommended)</h4>
          <pre className="rounded bg-gray-800 p-4 text-sm">
            <code>
              # Build and start the container docker-compose up -d # View logs docker-compose logs -f # Stop the
              container docker-compose down
            </code>
          </pre>
        </div>
        <div>
          <h4 className="mb-2 font-medium">Using Docker Directly</h4>
          <pre className="rounded bg-gray-800 p-4 text-sm">
            <code>
              # Build the image docker build -t lxdemos-terminal . # Run the container docker run -d --name
              lxdemos-terminal -p 7681:7681 lxdemos-terminal # View logs docker logs -f lxdemos-terminal # Stop the
              container docker stop lxdemos-terminal docker rm lxdemos-terminal
            </code>
          </pre>
        </div>
        <p className="text-sm text-gray-400">
          After running the container, the ttyd server will be available at{" "}
          <code className="rounded bg-gray-800 px-1">http://localhost:7681</code>. You can then configure the terminal
          emulator to connect to this address.
        </p>
      </div>
    </div>
  )
}

function EnvVariablesTab() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Environment Variables</h3>
      <p className="mb-4 text-gray-300">
        Configure these environment variables in your Next.js application to connect to the ttyd server:
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-700 bg-gray-800 p-2 text-left">Variable</th>
            <th className="border border-gray-700 bg-gray-800 p-2 text-left">Description</th>
            <th className="border border-gray-700 bg-gray-800 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-700 p-2">
              <code>NEXT_PUBLIC_TTYD_HOST</code>
            </td>
            <td className="border border-gray-700 p-2">Hostname or IP address of the ttyd server</td>
            <td className="border border-gray-700 p-2">
              <code>localhost</code> or <code>192.168.1.100</code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2">
              <code>NEXT_PUBLIC_TTYD_PORT</code>
            </td>
            <td className="border border-gray-700 p-2">Port number of the ttyd server</td>
            <td className="border border-gray-700 p-2">
              <code>7681</code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2">
              <code>TTYD_HOST</code>
            </td>
            <td className="border border-gray-700 p-2">Server-side hostname for API routes</td>
            <td className="border border-gray-700 p-2">
              <code>localhost</code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2">
              <code>TTYD_PORT</code>
            </td>
            <td className="border border-gray-700 p-2">Server-side port for API routes</td>
            <td className="border border-gray-700 p-2">
              <code>7681</code>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6">
        <h4 className="mb-2 font-medium">Setting Environment Variables</h4>
        <p className="mb-2 text-gray-300">
          You can set these variables in a <code className="rounded bg-gray-800 px-1">.env.local</code> file:
        </p>
        <pre className="rounded bg-gray-800 p-4 text-sm">
          <code>NEXT_PUBLIC_TTYD_HOST=localhost NEXT_PUBLIC_TTYD_PORT=7681 TTYD_HOST=localhost TTYD_PORT=7681</code>
        </pre>
      </div>
    </div>
  )
}

const dockerfileContent = `FROM debian:bullseye-slim

# Install required packages
RUN apt-get update && apt-get install -y \\
  vim \\
  neovim \\
  tmux \\
  zsh \\
  git \\
  curl \\
  wget \\
  htop \\
  net-tools \\
  procps \\
  iproute2 \\
  openssh-client \\
  sudo \\
  locales \\
  build-essential \\
  cmake \\
  pkg-config \\
  libjson-c-dev \\
  libwebsockets-dev \\
  && apt-get clean \\
  && rm -rf /var/lib/apt/lists/*

# Set up locale
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \\
  locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Create a non-root user
RUN useradd -m -s /bin/bash user && \\
  echo "user ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/user

# Install ttyd from source for latest version
RUN cd /tmp && \\
  git clone https://github.com/tsl0922/ttyd.git && \\
  cd ttyd && \\
  mkdir build && \\
  cd build && \\
  cmake .. && \\
  make && \\
  make install && \\
  cd / && \\
  rm -rf /tmp/ttyd

# Set up sample configuration files
RUN mkdir -p /home/user/.config/nvim
COPY configs/vimrc /home/user/.vimrc
COPY configs/bashrc /home/user/.bashrc
COPY configs/zshrc /home/user/.zshrc
COPY configs/tmux.conf /home/user/.tmux.conf
COPY configs/init.vim /home/user/.config/nvim/init.vim

# Set proper permissions
RUN chown -R user:user /home/user

# Switch to the non-root user
USER user
WORKDIR /home/user

# Expose ttyd port
EXPOSE 7681

# Start ttyd with bash
CMD ["ttyd", "-p", "7681", "-t", "fontSize=14", "-t", "theme={\\\"background\\\":\\\"#1a1a1a\\\",\\\"foreground\\\":\\\"#f8f8f8\\\"}", "bash"]`

const dockerComposeContent = `version: '3'

services:
  terminal:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "7681:7681"
    volumes:
      - terminal-data:/home/user
      - ./configs:/configs:ro
    environment:
      - TERM=xterm-256color
    # For security in production, consider adding:
    # - user: "1000:1000"  # Run as non-root
    # - read_only: true    # Read-only filesystem
    # - cap_drop: ALL      # Drop all capabilities
    # - security_opt: ["no-new-privileges:true"]

volumes:
  terminal-data:`

