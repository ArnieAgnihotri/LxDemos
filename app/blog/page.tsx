import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarIcon, Tag, User, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">LxDemos Blog</h1>
        <p className="mb-8 text-xl text-gray-300">
          Tips, tutorials, and insights on Linux configurations and terminal productivity.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>

            <div className="space-y-8">
              {blogPosts.slice(0, 5).map((post) => (
                <Card key={post.id} className="bg-gray-900 overflow-hidden">
                  <div
                    className="h-48 bg-gray-800"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" /> {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" /> {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" /> {post.readTime} min read
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                    <p className="mb-4 text-gray-300">{post.excerpt}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs">
                          <Tag className="mr-1 h-3 w-3" /> {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="bg-red-600 hover:bg-red-700">Read Article</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                Load More Articles
              </Button>
            </div>
          </div>

          <div>
            <Card className="mb-8 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Categories</h3>
              <div className="space-y-2">
                <Link href="/blog/category/vim" className="block text-gray-300 hover:text-white">
                  Vim & Neovim <span className="text-gray-500">(24)</span>
                </Link>
                <Link href="/blog/category/bash" className="block text-gray-300 hover:text-white">
                  Bash & Shell <span className="text-gray-500">(18)</span>
                </Link>
                <Link href="/blog/category/terminal" className="block text-gray-300 hover:text-white">
                  Terminal Customization <span className="text-gray-500">(15)</span>
                </Link>
                <Link href="/blog/category/tips" className="block text-gray-300 hover:text-white">
                  Productivity Tips <span className="text-gray-500">(12)</span>
                </Link>
                <Link href="/blog/category/docker" className="block text-gray-300 hover:text-white">
                  Docker & Containers <span className="text-gray-500">(9)</span>
                </Link>
                <Link href="/blog/category/tutorials" className="block text-gray-300 hover:text-white">
                  Tutorials <span className="text-gray-500">(27)</span>
                </Link>
              </div>
            </Card>

            <Card className="mb-8 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block">
                    <div className="flex gap-3">
                      <div
                        className="h-16 w-16 flex-shrink-0 bg-gray-800"
                        style={{
                          backgroundImage: `url(${post.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div>
                        <h4 className="font-medium hover:text-red-500">{post.title}</h4>
                        <div className="text-xs text-gray-400">{post.date}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Subscribe</h3>
              <p className="mb-4 text-gray-300">Get the latest articles and updates delivered to your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  className="flex-1 rounded-md bg-gray-800 px-3 py-2 text-white"
                />
                <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Vim Tricks to Boost Your Productivity",
    excerpt:
      "Discover lesser-known Vim tricks that will make you more efficient and productive in your daily coding tasks.",
    date: "March 15, 2024",
    author: "Jane Doe",
    readTime: 8,
    image: "/placeholder.svg?height=400&width=800&text=Vim+Tricks",
    tags: ["vim", "productivity", "coding"],
  },
  {
    id: 2,
    title: "Setting Up the Ultimate Tmux Configuration",
    excerpt: "Learn how to configure Tmux for maximum efficiency with custom key bindings, plugins, and status line.",
    date: "March 10, 2024",
    author: "John Smith",
    readTime: 12,
    image: "/placeholder.svg?height=400&width=800&text=Tmux+Config",
    tags: ["tmux", "terminal", "configuration"],
  },
  {
    id: 3,
    title: "Mastering Zsh: From Basics to Oh-My-Zsh",
    excerpt:
      "A comprehensive guide to Zsh shell, including installation, configuration, and advanced customization with Oh-My-Zsh.",
    date: "March 5, 2024",
    author: "Alex Johnson",
    readTime: 15,
    image: "/placeholder.svg?height=400&width=800&text=Zsh+Guide",
    tags: ["zsh", "oh-my-zsh", "shell"],
  },
  {
    id: 4,
    title: "Docker Containers for Linux Development",
    excerpt: "How to use Docker to create consistent development environments across different Linux distributions.",
    date: "February 28, 2024",
    author: "Michael Brown",
    readTime: 10,
    image: "/placeholder.svg?height=400&width=800&text=Docker+Dev",
    tags: ["docker", "development", "containers"],
  },
  {
    id: 5,
    title: "Creating Your Own Neovim Configuration from Scratch",
    excerpt: "Step-by-step tutorial on building a modern Neovim setup with Lua, LSP, Treesitter, and more.",
    date: "February 20, 2024",
    author: "Sarah Williams",
    readTime: 18,
    image: "/placeholder.svg?height=400&width=800&text=Neovim+Lua",
    tags: ["neovim", "lua", "editor"],
  },
]

