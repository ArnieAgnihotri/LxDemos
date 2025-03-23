import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ConfigurationRow from "@/components/configuration-row"
import Terminal from "@/components/terminal"
import { Code, Download } from "lucide-react"

export default function NeovimPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Neovim Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try various Neovim configurations to enhance your text editing experience.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Try Neovim in Terminal</h2>
            <p className="mb-4 text-gray-300">
              Test different Neovim configurations in our real-time terminal emulator before downloading.
            </p>
            <Terminal initialCommand="nvim --version" />
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Neovim</h2>
            <p className="mb-4 text-gray-300">
              Neovim is a hyperextensible Vim-based text editor that seeks to aggressively refactor Vim to maintain a
              comprehensive and stable API, improve the user experience, and foster a community of developers.
            </p>
            <p className="mb-4 text-gray-300">Key features of Neovim include:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
              <li>Modern GUI and TUI implementations</li>
              <li>First-class Lua integration</li>
              <li>Built-in LSP client</li>
              <li>Asynchronous I/O</li>
              <li>Extensive plugin ecosystem</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Get Neovim
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Code className="mr-2 h-4 w-4" /> Official Documentation
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Neovim Configurations</h2>
          <ConfigurationRow title="Popular Neovim Configurations" category="neovim" />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Neovim Essentials</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Lua Configuration</h3>
              <p className="mb-2 text-gray-300">Using Lua in Neovim:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>init.lua structure</li>
                <li>Setting Neovim options</li>
                <li>Key mapping in Lua</li>
                <li>Loading plugins</li>
                <li>Custom Lua modules</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">LSP Setup</h3>
              <p className="mb-2 text-gray-300">Configuring the LSP client:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>nvim-lspconfig basics</li>
                <li>Language server installation</li>
                <li>Autocompletion setup</li>
                <li>Diagnostic settings</li>
                <li>Code actions and navigation</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Essential Plugins</h3>
              <p className="mb-2 text-gray-300">Must-have Neovim plugins:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>telescope.nvim</li>
                <li>nvim-treesitter</li>
                <li>lualine.nvim</li>
                <li>nvim-cmp</li>
                <li>gitsigns.nvim</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

