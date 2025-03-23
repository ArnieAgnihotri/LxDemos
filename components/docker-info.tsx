"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Terminal } from "lucide-react"

export default function DockerInfo() {
  return (
    <Card className="bg-gray-900">
      <div className="p-6">
        <h2 className="mb-4 text-xl font-bold">Docker Setup for Terminal Emulator</h2>
        <p className="mb-4 text-gray-300">
          The terminal emulator is powered by a Docker container running Debian with ttyd and xterm.js. Follow these
          instructions to set up the Docker backend for a fully functional terminal experience.
        </p>

        <Tabs defaultValue="setup">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="setup">Setup Instructions</TabsTrigger>
            <TabsTrigger value="dockerfile">Dockerfile</TabsTrigger>
            <TabsTrigger value="compose">Docker Compose</TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Prerequisites</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>Docker installed on your server</li>
                <li>Docker Compose installed</li>
                <li>Basic knowledge of Docker and networking</li>
              </ul>

              <h3 className="text-lg font-semibold">Setup Steps</h3>
              <ol className="list-inside list-decimal space-y-2 text-gray-300">
                <li>Clone the repository or create the Docker files as shown in the tabs</li>
                <li>Navigate to the directory containing the docker-compose.yml file</li>
                <li>
                  Run <code className="rounded bg-gray-800 px-2 py-1">docker-compose up -d</code> to start the container
                </li>
                <li>
                  The terminal will be available at{" "}
                  <code className="rounded bg-gray-800 px-2 py-1">http://your-server-ip:7681</code>
                </li>
                <li>Configure your web application to connect to this endpoint</li>
              </ol>

              <h3 className="text-lg font-semibold">Security Considerations</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>The terminal runs as a non-root user for improved security</li>
                <li>Consider adding authentication to ttyd (see documentation)</li>
                <li>Use a reverse proxy with SSL for secure connections</li>
                <li>Restrict access to the terminal endpoint using firewall rules</li>
              </ul>

              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Terminal className="mr-2 h-4 w-4" /> View Full Documentation
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="dockerfile" className="mt-4">
            <div className="relative">
              <CopyButton text={dockerfileContent} />
              <pre className="max-h-[400px] overflow-auto rounded bg-gray-800 p-4 text-sm">
                <code>{dockerfileContent}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="compose" className="mt-4">
            <div className="relative">
              <CopyButton text={dockerComposeContent} />
              <pre className="max-h-[400px] overflow-auto rounded bg-gray-800 p-4 text-sm">
                <code>{dockerComposeContent}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}

// Copy button component with copy functionality
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute right-2 top-2 z-10 h-8 border-gray-700 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white"
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
    ttyd \\
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

# Set up sample configuration files
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
CMD ["ttyd", "-p", "7681", "bash"]`

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
    environment:
      - TERM=xterm-256color

volumes:
  terminal-data:`

