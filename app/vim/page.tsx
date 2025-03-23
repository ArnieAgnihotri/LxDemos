import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ConfigurationRow from "@/components/configuration-row"
import Terminal from "@/components/terminal"
import { Code, Download } from "lucide-react"

export default function VimPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Vim Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try various Vim configurations to enhance your text editing experience.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Try Vim in Terminal</h2>
            <p className="mb-4 text-gray-300">
              Test different Vim configurations in our real-time terminal emulator before downloading.
            </p>
            <Terminal initialCommand="vim -v" />
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Vim</h2>
            <p className="mb-4 text-gray-300">
              Vim is a highly configurable text editor built to make creating and changing any kind of text very
              efficient. It is included as "vi" with most UNIX systems and with Apple OS X.
            </p>
            <p className="mb-4 text-gray-300">
              Vim is rock stable and is continuously being developed to become even better. Among its features are:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
              <li>Persistent, multi-level undo tree</li>
              <li>Extensive plugin system</li>
              <li>Support for hundreds of programming languages and file formats</li>
              <li>Powerful search and replace</li>
              <li>Integration with many tools</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Get Vim
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Code className="mr-2 h-4 w-4" /> Official Documentation
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Vim Configurations</h2>
          <ConfigurationRow title="Popular Vim Configurations" category="vim" />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Getting Started with Vim</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Basic Commands</h3>
              <p className="mb-2 text-gray-300">Essential Vim commands to get started:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>i - Enter insert mode</li>
                <li>Esc - Exit insert mode</li>
                <li>:w - Save file</li>
                <li>:q - Quit</li>
                <li>:wq - Save and quit</li>
                <li>h, j, k, l - Move cursor</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Configuration Basics</h3>
              <p className="mb-2 text-gray-300">How to customize your .vimrc file:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Create ~/.vimrc file</li>
                <li>Set options like 'set number'</li>
                <li>Add keyboard mappings</li>
                <li>Configure plugins</li>
                <li>Set color schemes</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Learning Resources</h3>
              <p className="mb-2 text-gray-300">Great resources to master Vim:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>vimtutor - Built-in tutorial</li>
                <li>Vim Adventures - Learning game</li>
                <li>YouTube tutorials</li>
                <li>Vim Tips Wiki</li>
                <li>Vim user manuals</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

