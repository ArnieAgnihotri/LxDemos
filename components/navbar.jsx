"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-red-600">
              LxDemos
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="text-sm text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/vim" className="text-sm text-white hover:text-gray-300">
                    Vim
                  </Link>
                </li>
                <li>
                  <Link href="/bash" className="text-sm text-white hover:text-gray-300">
                    Bash
                  </Link>
                </li>
                <li>
                  <Link href="/zsh" className="text-sm text-white hover:text-gray-300">
                    Zsh
                  </Link>
                </li>
                <li>
                  <Link href="/terminal" className="text-sm text-white hover:text-gray-300">
                    Terminal
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-white hover:text-gray-300">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {isSearchOpen ? (
              <div className="relative flex items-center">
                <Input
                  type="search"
                  placeholder="Search configurations..."
                  className="w-64 bg-black/20 text-sm text-white placeholder:text-gray-400 focus-visible:ring-red-500"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 text-gray-400 hover:text-white"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div className="hidden md:block">
              <Button variant="outline" className="border-red-600 text-white hover:bg-red-700 hover:text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-black/95 py-4">
            <ul className="flex flex-col gap-4 px-4">
              <li>
                <Link href="/" className="block py-2 text-sm text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vim" className="block py-2 text-sm text-white hover:text-gray-300">
                  Vim
                </Link>
              </li>
              <li>
                <Link href="/bash" className="block py-2 text-sm text-white hover:text-gray-300">
                  Bash
                </Link>
              </li>
              <li>
                <Link href="/zsh" className="block py-2 text-sm text-white hover:text-gray-300">
                  Zsh
                </Link>
              </li>
              <li>
                <Link href="/terminal" className="block py-2 text-sm text-white hover:text-gray-300">
                  Terminal
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-sm text-white hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-white hover:bg-red-700 hover:text-white"
                >
                  Sign In
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

