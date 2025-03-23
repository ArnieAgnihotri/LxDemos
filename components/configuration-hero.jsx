import { Play, Plus, ThumbsUp, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConfigurationHero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Hero background - using a placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=LxDemos+Hero')" }}
      />

      <div className="absolute bottom-1/4 left-0 w-full px-4 md:bottom-1/3 md:px-16">
        <div className="container mx-auto">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">LxDemos: Neovim Ultimate Config</h1>
          <p className="mb-6 max-w-2xl text-lg text-gray-300">
            A highly optimized Neovim configuration with LSP support, fuzzy finding, git integration, and a beautiful
            UI. Try it directly in our real-time terminal.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-black hover:bg-white/90">
              <Play className="mr-2 h-4 w-4" /> Try in Terminal
            </Button>
            <Button variant="secondary" className="bg-gray-600/70 text-white hover:bg-gray-600">
              <Plus className="mr-2 h-4 w-4" /> Add to My List
            </Button>
            <Button variant="outline" className="border-gray-400 bg-transparent text-white hover:bg-white/10">
              <ThumbsUp className="mr-2 h-4 w-4" /> Rate
            </Button>
            <Button variant="outline" className="border-gray-400 bg-transparent text-white hover:bg-white/10">
              <Info className="mr-2 h-4 w-4" /> More Info
            </Button>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="rounded bg-red-600 px-2 py-1 text-xs font-bold">POPULAR</div>
            <div className="text-sm font-medium">Productivity</div>
            <div className="text-sm font-medium">Development</div>
            <div className="text-sm font-medium">Terminal</div>
          </div>
        </div>
      </div>
    </div>
  )
}

