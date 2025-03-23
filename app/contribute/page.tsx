import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Upload, FileCode, Users, Lightbulb } from "lucide-react"

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Contribute to LxDemos</h1>
        <p className="mb-8 text-xl text-gray-300">
          Help us build the best Linux configuration sharing platform by contributing your knowledge and skills.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Why Contribute?</h2>
            <p className="mb-4 text-gray-300">
              LxDemos is an open-source community project aimed at making Linux configurations more accessible and
              easier to try. By contributing, you'll:
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-300">
              <li>Help fellow Linux enthusiasts discover great configurations</li>
              <li>Showcase your own configurations and get feedback</li>
              <li>Become part of a growing community of Linux power users</li>
              <li>Improve your coding and configuration skills</li>
              <li>Make the Linux experience better for everyone</li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Github className="mr-2 h-4 w-4" /> GitHub Repository
              </Button>
              <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
                <Users className="mr-2 h-4 w-4" /> Join Our Discord
              </Button>
            </div>
          </div>
          <Card className="bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Contribution Stats</h2>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-red-500">247</div>
                <div className="text-sm text-gray-400">Contributors</div>
              </div>
              <div className="rounded-lg bg-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-red-500">1,356</div>
                <div className="text-sm text-gray-400">Configurations</div>
              </div>
              <div className="rounded-lg bg-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-red-500">87</div>
                <div className="text-sm text-gray-400">Pull Requests</div>
              </div>
              <div className="rounded-lg bg-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-red-500">3,204</div>
                <div className="text-sm text-gray-400">GitHub Stars</div>
              </div>
            </div>
            <p className="mb-2 text-center text-sm text-gray-400">Last updated: March 23, 2024</p>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Ways to Contribute</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <FileCode className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Submit Configurations</h3>
              <p className="text-gray-300">
                Share your custom Vim, Bash, Zsh, Tmux, or Neovim configurations with the community. We welcome
                configurations of all complexity levels, from beginner-friendly to advanced setups.
              </p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Upload className="mr-2 h-4 w-4" /> Submit Configuration
              </Button>
            </Card>
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <Github className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Improve the Platform</h3>
              <p className="text-gray-300">
                Help us enhance LxDemos by contributing to the codebase. Fix bugs, add features, improve documentation,
                or optimize performance. We use Next.js, React, and Tailwind CSS.
              </p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Github className="mr-2 h-4 w-4" /> View GitHub Issues
              </Button>
            </Card>
            <Card className="bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Suggest Ideas</h3>
              <p className="text-gray-300">
                Have an idea for a new feature or improvement? We'd love to hear it! Submit your suggestions through
                GitHub issues or join our Discord community to discuss your ideas with the team.
              </p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                <Lightbulb className="mr-2 h-4 w-4" /> Submit Idea
              </Button>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Contribution Guidelines</h2>
          <Card className="bg-gray-900 p-6">
            <div className="prose prose-invert max-w-none">
              <h3>Submitting Configurations</h3>
              <p>When submitting a configuration, please follow these guidelines:</p>
              <ol>
                <li>Include a detailed README with installation instructions</li>
                <li>Document any dependencies or special requirements</li>
                <li>Organize your configuration files logically</li>
                <li>Include screenshots if applicable</li>
                <li>Add comments to explain complex parts of your configuration</li>
              </ol>

              <h3>Code Contributions</h3>
              <p>For code contributions to the platform:</p>
              <ol>
                <li>Fork the repository and create a new branch for your feature</li>
                <li>Follow the project's coding style and conventions</li>
                <li>Write tests for your code when applicable</li>
                <li>Make sure all tests pass before submitting a pull request</li>
                <li>Document your changes thoroughly in the pull request description</li>
              </ol>

              <h3>Review Process</h3>
              <p>
                All contributions will be reviewed by the maintainers. We may suggest changes or improvements before
                merging. Please be patient and responsive during the review process.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

