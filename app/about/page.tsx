import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import DockerInfo from "@/components/docker-info"
import { Github, Terminal, Code, Server, Database, Settings } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">About LxDemos</h1>
        <p className="mb-8 text-xl text-gray-300">Discover, share, and try Linux configurations in real-time</p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="mb-4 text-gray-300">
              LxDemos was created to help developers discover and try Linux configurations in a user-friendly,
              Netflix-style interface. We believe that finding the perfect configuration for your development
              environment should be easy and fun.
            </p>
            <p className="mb-4 text-gray-300">
              With our real-time terminal emulator, you can try configurations before downloading them, making it easier
              to find the perfect setup for your needs.
            </p>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Terminal className="mr-2 h-4 w-4" /> Try Terminal
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Code className="mr-3 mt-1 h-5 w-5 text-red-500" />
                <div>
                  <h3 className="font-semibold">Configuration Library</h3>
                  <p className="text-gray-400">
                    Browse a vast collection of Linux configurations for vim, bash, zsh, and more
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Terminal className="mr-3 mt-1 h-5 w-5 text-red-500" />
                <div>
                  <h3 className="font-semibold">Real-time Terminal</h3>
                  <p className="text-gray-400">
                    Try configurations in a real Debian environment directly in your browser
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Server className="mr-3 mt-1 h-5 w-5 text-red-500" />
                <div>
                  <h3 className="font-semibold">Docker Backend</h3>
                  <p className="text-gray-400">Powered by Docker for secure and isolated terminal sessions</p>
                </div>
              </li>
              <li className="flex items-start">
                <Settings className="mr-3 mt-1 h-5 w-5 text-red-500" />
                <div>
                  <h3 className="font-semibold">Detailed Documentation</h3>
                  <p className="text-gray-400">Comprehensive installation instructions and usage guides</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">1. Browse Configurations</h3>
              <p className="text-gray-400">
                Explore our Netflix-style interface to discover Linux configurations for various tools and environments.
                Filter by category, popularity, or specific needs.
              </p>
            </Card>
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">2. Try in Terminal</h3>
              <p className="text-gray-400">
                Test configurations in our real-time terminal emulator before downloading. See how they work and if they
                meet your needs without modifying your local environment.
              </p>
            </Card>
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">3. Download & Use</h3>
              <p className="text-gray-400">
                Once you've found the perfect configuration, download it and follow our detailed installation
                instructions to set it up on your own system.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Technical Architecture</h2>
          <DockerInfo />
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Get Involved</h2>
          <Card className="bg-gray-900 p-6">
            <p className="mb-4 text-gray-300">
              LxDemos is an open-source project, and we welcome contributions from the community. Whether you want to
              add new configurations, improve the terminal emulator, or enhance the user interface, there are many ways
              to get involved.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link href="/contribute" className="block">
                <Button className="w-full bg-red-600 hover:bg-red-700">Contribute Configurations</Button>
              </Link>
              <Link href="https://github.com" className="block">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent text-white hover:bg-gray-800"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub Repository
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent text-white hover:bg-gray-800"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

