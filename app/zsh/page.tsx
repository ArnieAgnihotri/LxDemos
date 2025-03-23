import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ConfigurationRow from "@/components/configuration-row"
import Terminal from "@/components/terminal"
import { Code, Download } from "lucide-react"

export default function ZshPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Zsh Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try various Zsh configurations to enhance your terminal experience.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Try Zsh in Terminal</h2>
            <p className="mb-4 text-gray-300">
              Test different Zsh configurations in our real-time terminal emulator before downloading.
            </p>
            <Terminal initialCommand="zsh --version" />
          </Card>

          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Zsh</h2>
            <p className="mb-4 text-gray-300">
              Zsh (Z Shell) is an extended version of the Bourne Shell (sh), with many new features and improvements.
              It's the default shell in macOS since Catalina and a popular alternative to Bash on Linux.
            </p>
            <p className="mb-4 text-gray-300">
              Zsh includes powerful features that make it a favorite among developers:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
              <li>Advanced tab completion</li>
              <li>Spelling correction</li>
              <li>Path expansion</li>
              <li>Plugin support (Oh My Zsh)</li>
              <li>Themeable prompts</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Get Zsh
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Code className="mr-2 h-4 w-4" /> Official Documentation
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Zsh Configurations</h2>
          <ConfigurationRow title="Popular Zsh Configurations" category="zshrc" />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Oh My Zsh Frameworks</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Oh My Zsh</h3>
              <p className="mb-2 text-gray-300">The most popular Zsh framework:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>300+ plugins available</li>
                <li>140+ themes to choose from</li>
                <li>Active community</li>
                <li>Automatic updates</li>
                <li>Extensive documentation</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Popular Themes</h3>
              <p className="mb-2 text-gray-300">Most loved Zsh themes:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Powerlevel10k</li>
                <li>Agnoster</li>
                <li>Spaceship</li>
                <li>Avit</li>
                <li>Bureau</li>
              </ul>
            </Card>
            <Card className="bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">Essential Plugins</h3>
              <p className="mb-2 text-gray-300">Must-have Zsh plugins:</p>
              <ul className="list-inside list-disc text-gray-300">
                <li>git</li>
                <li>autojump</li>
                <li>zsh-autosuggestions</li>
                <li>zsh-syntax-highlighting</li>
                <li>history-substring-search</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

