"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Terminal from "@/components/terminal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Github, Star, TerminalIcon, Copy, Check } from "lucide-react"
import ConfigurationRow from "@/components/configuration-row"
import { useState } from "react"
import { getConfig, getInstallInstructions } from "@/lib/config-data"

// Copy button component with copy functionality
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="sm" className="h-8 text-gray-400 hover:text-white" onClick={handleCopy}>
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

export default function ConfigurationDetailPage({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const config = getConfig(category, id)

  useEffect(() => {
    // Update last viewed configuration
    const updateLastViewed = async () => {
      try {
        await fetch("/api/user/last-viewed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ configId: id }),
        })
      } catch (error) {
        console.error("Error updating last viewed:", error)
      }
    }

    updateLastViewed()
  }, [id])

  if (!config) {
    notFound()
  }

  const installInstructions = getInstallInstructions(category)

  // Determine the file extension based on category
  const fileExtension =
    category === "vim" || category === "neovim"
      ? "vimrc"
      : category === "bashrc"
        ? "bashrc"
        : category === "zshrc"
          ? "zshrc"
          : category === "tmux"
            ? "tmux.conf"
            : "txt"

  // Determine the command to try in terminal
  const terminalCommand =
    category === "vim" || category === "neovim"
      ? "vim -u /dev/null"
      : category === "bashrc" || category === "zshrc"
        ? 'echo "Shell configuration loaded"'
        : category === "tmux"
          ? "tmux -f /dev/null new-session -d"
          : "ls"

  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-2 text-3xl font-bold">{config.title}</h1>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="h-4 w-4 fill-yellow-400" />
                <span>{config.stars}</span>
              </div>
              <div className="text-gray-400">By @{config.author}</div>
            </div>
            <p className="mb-6 text-lg text-gray-300">{config.description}</p>

            <Tabs defaultValue="code" className="mb-8">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="code">Configuration</TabsTrigger>
                <TabsTrigger value="install">Installation</TabsTrigger>
                <TabsTrigger value="terminal">Try It</TabsTrigger>
              </TabsList>
              <TabsContent value="code" className="mt-4">
                <Card className="bg-gray-900 p-0">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                    <div className="text-sm font-medium">{`.${fileExtension}`}</div>
                    <CopyButton text={config.content} />
                  </div>
                  <pre className="max-h-[500px] overflow-auto p-4 text-sm">
                    <code>{config.content}</code>
                  </pre>
                </Card>
              </TabsContent>
              <TabsContent value="install" className="mt-4">
                <Card className="bg-gray-900 p-4">
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-sm">{installInstructions}</pre>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="terminal" className="mt-4">
                <Terminal initialCommand={terminalCommand} fullScreen={false} />
              </TabsContent>
            </Tabs>

            <div className="mb-8 flex flex-wrap gap-3">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Download Configuration
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <TerminalIcon className="mr-2 h-4 w-4" /> Open in Full Terminal
              </Button>
            </div>
          </div>

          <div>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">About This Configuration</h3>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="font-medium capitalize">{category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Author:</span>
                  <span className="font-medium">@{config.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Stars:</span>
                  <span className="font-medium">{config.stars}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Created:</span>
                  <span className="font-medium">{config.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Updated:</span>
                  <span className="font-medium">{config.updatedAt}</span>
                </div>
              </div>
              <div className="mb-4 border-t border-gray-800 pt-4">
                <h4 className="mb-2 font-medium">Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {config.industries.map((industry) => (
                    <span key={industry} className="rounded-full bg-gray-800 px-3 py-1 text-xs">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <h4 className="mb-2 font-medium">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {config.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-800 px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Similar Configurations</h2>
          <ConfigurationRow
            title={`More ${category.charAt(0).toUpperCase() + category.slice(1)} Configurations`}
            category={category}
          />
        </div>
      </div>
    </div>
  )
}

