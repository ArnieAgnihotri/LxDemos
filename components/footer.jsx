import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">LxDemos</h3>
            <p className="text-sm">
              Discover, share, and try Linux configurations in real-time. Find the perfect setup for your terminal and
              development environment.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-gray-500">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vim" className="hover:text-white">
                  Vim
                </Link>
              </li>
              <li>
                <Link href="/bash" className="hover:text-white">
                  Bash
                </Link>
              </li>
              <li>
                <Link href="/zsh" className="hover:text-white">
                  Zsh
                </Link>
              </li>
              <li>
                <Link href="/tmux" className="hover:text-white">
                  Tmux
                </Link>
              </li>
              <li>
                <Link href="/neovim" className="hover:text-white">
                  Neovim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-gray-500">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="hover:text-white">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-gray-500">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-4 text-xs">Subscribe to our newsletter for updates on new configurations and features.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} LxDemos. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

