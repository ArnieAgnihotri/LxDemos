import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ConfigurationRow from "@/components/configuration-row"
import Terminal from "@/components/terminal"
import { Code, Download } from "lucide-react"

export default function TmuxPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Tmux Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try various Tmux configurations to enhance your terminal multiplexing experience.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Try Tmux in Terminal</h2>
            <p className="mb-4 text-gray-300">
              Test different Tmux configurations in our real-time terminal emulator before downloading.
            </p>
            <Terminal initialCommand="tmux -V" />
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Tmux</h2>
            <p className="mb-4 text-gray-300">
              Tmux (Terminal Multiplexer) is a tool that allows multiple terminal sessions to be created, accessed, and
              controlled from a single screen. It's perfect for remote work, running multiple commands at once, and
              preserving terminal sessions.
            </p>
            <p className="mb-4 text-gray-300">Key features of Tmux include:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
              <li>Session persistence</li>
              <li>Window and pane splitting</li>
              <li>Session sharing</li>
              <li>Customizable key bindings</li>
              <li>Scriptable configuration</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Get Tmux
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Code className="mr-2 h-4 w-4" /> Official Documentation
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Tmux Configurations</h2>
          <ConfigurationRow title="Popular Tmux Configurations" category="tmux" />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Tmux Essentials</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Basic Commands</h3>
              <p className="mb-2 text-gray-300">Essential Tmux commands:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>tmux new -s mysession</li>
                <li>tmux attach -t mysession</li>
                <li>prefix + c (new window)</li>
                <li>prefix + % (split vertically)</li>
                <li>prefix + " (split horizontally)</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Configuration Basics</h3>
              <p className="mb-2 text-gray-300">Essential .tmux.conf settings:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Changing the prefix key</li>
                <li>Mouse mode configuration</li>
                <li>Status bar customization</li>
                <li>Custom key bindings</li>
                <li>Plugin management</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Popular Plugins</h3>
              <p className="mb-2 text-gray-300">Must-have Tmux plugins:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>tmux-resurrect</li>
                <li>tmux-continuum</li>
                <li>tmux-yank</li>
                <li>tmux-sensible</li>
                <li>tmux-themepack</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

