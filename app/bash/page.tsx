import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ConfigurationRow from "@/components/configuration-row"
import Terminal from "@/components/terminal"
import { Code, Download } from "lucide-react"

export default function BashPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Bash Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try various Bash configurations to enhance your terminal experience.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Try Bash in Terminal</h2>
            <p className="mb-4 text-gray-300">
              Test different Bash configurations in our real-time terminal emulator before downloading.
            </p>
            <Terminal initialCommand="bash --version" />
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Bash</h2>
            <p className="mb-4 text-gray-300">
              Bash (Bourne Again SHell) is a Unix shell and command language written by Brian Fox for the GNU Project.
              It's the default shell for most Linux distributions and macOS (up to Catalina).
            </p>
            <p className="mb-4 text-gray-300">
              Bash offers functional improvements over other shells for both interactive and programming use:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
              <li>Command line editing</li>
              <li>Command history with search</li>
              <li>Job control</li>
              <li>Shell functions and aliases</li>
              <li>Indexed arrays</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Get Bash
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Code className="mr-2 h-4 w-4" /> Official Documentation
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Bash Configurations</h2>
          <ConfigurationRow title="Popular Bash Configurations" category="bashrc" />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Customizing Your Bash Profile</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Essential Configuration</h3>
              <p className="mb-2 text-gray-300">Key elements of a good .bashrc:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Custom prompt (PS1)</li>
                <li>Useful aliases</li>
                <li>Environment variables</li>
                <li>History control</li>
                <li>Shell options</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Useful Aliases</h3>
              <p className="mb-2 text-gray-300">Common aliases to improve productivity:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>alias ll='ls -la'</li>
                <li>alias ..='cd ..'</li>
                <li>alias mkdir='mkdir -p'</li>
                <li>alias grep='grep --color=auto'</li>
                <li>alias update='sudo apt update'</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Prompt Customization</h3>
              <p className="mb-2 text-gray-300">Customize your PS1 prompt with:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Username and hostname</li>
                <li>Current directory</li>
                <li>Git branch information</li>
                <li>Custom colors</li>
                <li>Command exit status</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

