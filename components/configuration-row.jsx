"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Simplified configuration card component
function ConfigurationCard({ config }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-lg bg-gray-800 transition-all hover:scale-105"
      style={{ width: "280px" }}
    >
      <div className="relative h-full w-full">
        {/* Card background */}
        <div
          className="h-40 bg-gray-700"
          style={{
            backgroundImage: `url('/placeholder.svg?height=200&width=280&text=${encodeURIComponent(config.title)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-1 text-lg font-bold">{config.title}</h3>
          <div className="mb-2 flex items-center gap-1 text-yellow-400">
            <span>★★★★☆</span>
            <span>{config.stars}</span>
          </div>
          <p className="mb-3 text-sm text-gray-300">{config.description}</p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Terminal className="mr-1 h-3 w-3" /> Try
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock data for configurations
const MOCK_CONFIGS = {
  vim: [
    {
      id: 1,
      title: "Minimal Vim",
      author: "vimmaster",
      stars: 245,
      description: "A lightweight vim configuration for beginners",
    },
    {
      id: 2,
      title: "Ultimate Vim",
      author: "poweruser",
      stars: 1024,
      description: "Feature-rich vim setup for power users",
    },
    {
      id: 3,
      title: "Vim for Web Dev",
      author: "webdev",
      stars: 567,
      description: "Optimized for web development with syntax highlighting",
    },
    {
      id: 4,
      title: "Vim for Python",
      author: "pythonista",
      stars: 789,
      description: "Python-focused vim configuration with linting",
    },
    { id: 5, title: "Vim for Go", author: "gopher", stars: 432, description: "Go development environment with vim" },
    { id: 6, title: "Vim for Rust", author: "rustacean", stars: 321, description: "Rust-optimized vim configuration" },
  ],
  bashrc: [
    {
      id: 1,
      title: "Minimal Bash",
      author: "bashuser",
      stars: 123,
      description: "Clean and simple bash configuration",
    },
    {
      id: 2,
      title: "Power Bash",
      author: "shellmaster",
      stars: 456,
      description: "Powerful bash setup with aliases and functions",
    },
    { id: 3, title: "Dev Bash", author: "devops", stars: 789, description: "DevOps-focused bash configuration" },
    { id: 4, title: "Git Bash", author: "gituser", stars: 234, description: "Git-optimized bash with custom prompts" },
  ],
  zshrc: [
    { id: 1, title: "Oh-My-Zsh Basic", author: "zshuser", stars: 890, description: "Basic oh-my-zsh configuration" },
    {
      id: 2,
      title: "Powerline Zsh",
      author: "powerline",
      stars: 567,
      description: "Zsh with powerline theme and plugins",
    },
    { id: 3, title: "Dev Zsh", author: "devzsh", stars: 432, description: "Developer-focused zsh configuration" },
  ],
  tmux: [
    { id: 1, title: "Basic Tmux", author: "tmuxuser", stars: 234, description: "Simple tmux configuration" },
    {
      id: 2,
      title: "Power Tmux",
      author: "powertmux",
      stars: 567,
      description: "Advanced tmux with custom keybindings",
    },
  ],
  neovim: [
    { id: 1, title: "Neovim Basic", author: "neouser", stars: 789, description: "Basic neovim configuration" },
    { id: 2, title: "Neovim LSP", author: "lspuser", stars: 1023, description: "Neovim with LSP support" },
    { id: 3, title: "Neovim Lua", author: "luauser", stars: 567, description: "Lua-based neovim configuration" },
  ],
}

export default function ConfigurationRow({ title, category }) {
  const rowRef = useRef(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const configs = MOCK_CONFIGS[category] || []

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollAmount = clientWidth * 0.8

      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount

      rowRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update button visibility after scroll
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftButton(rowRef.current.scrollLeft > 0)
          setShowRightButton(rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10)
        }
      }, 300)
    }
  }

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        <Link href={`/${category}`}>
          <Button variant="outline" size="sm" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
            <Terminal className="mr-2 h-4 w-4" /> View All
          </Button>
        </Link>
      </div>
      <div className="relative">
        {showLeftButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          onScroll={() => {
            if (rowRef.current) {
              setShowLeftButton(rowRef.current.scrollLeft > 0)
              setShowRightButton(
                rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10,
              )
            }
          }}
        >
          {configs.map((config) => (
            <Link key={config.id} href={`/${category}/${config.id}`}>
              <ConfigurationCard config={config} />
            </Link>
          ))}
        </div>

        {showRightButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  )
}

