import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import ConfigurationRow from "@/components/configuration-row"
import LastViewedConfig from "@/components/last-viewed-config"
import UserNav from "@/components/user-nav"
import { getAllIndustries } from "@/lib/config-data"

export default function HomePage() {
  const industries = getAllIndustries()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* Hero background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=LxDemos+Hero')" }}
        />

        <div className="absolute top-4 right-4 z-10">
          <UserNav />
        </div>

        <div className="absolute bottom-1/4 left-0 w-full px-4 md:bottom-1/3 md:px-16">
          <div className="container mx-auto">
            <h1 className="mb-2 text-4xl font-bold md:text-6xl">LxDemos: Linux Configuration Hub</h1>
            <p className="mb-6 max-w-2xl text-lg text-gray-300">
              Discover, share, and try Linux configurations in real-time. Find the perfect setup for your terminal and
              development environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-red-600 text-white hover:bg-red-700">Try in Terminal</Button>
              <Button variant="secondary" className="bg-gray-600/70 text-white hover:bg-gray-600">
                Add to My List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4 pt-6">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="mb-8">
                <Link href="/terminal">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Terminal className="mr-2 h-4 w-4" /> Open Terminal Emulator
                  </Button>
                </Link>
              </div>

              <h2 className="mb-6 text-2xl font-bold">Browse by Industry</h2>
              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {industries.map((industry) => (
                  <Link
                    key={industry}
                    href={`/industry/${encodeURIComponent(industry.replace(/ /g, "-"))}`}
                    className="block"
                  >
                    <div className="rounded-lg bg-gray-900 p-4 hover:bg-gray-800 transition-colors">
                      <h3 className="font-semibold">{industry}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <LastViewedConfig />
            </div>
          </div>

          {/* Configuration Rows */}
          <ConfigurationRow title="Vim Configurations" category="vim" />
          <ConfigurationRow title="Bash Configurations" category="bashrc" />
          <ConfigurationRow title="Zsh Configurations" category="zshrc" />
          <ConfigurationRow title="Tmux Configurations" category="tmux" />
          <ConfigurationRow title="Neovim Configurations" category="neovim" />
        </div>
      </main>
    </div>
  )
}

