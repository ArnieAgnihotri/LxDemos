import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mb-8 text-xl text-gray-300">
          Find answers to common questions about LxDemos and Linux configurations.
        </p>

        <div className="mb-12 mx-auto max-w-2xl">
          <div className="relative mb-8">
            <Input placeholder="Search for answers..." className="bg-gray-900 border-gray-700 pl-10 py-6 text-white" />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>

          <Card className="bg-gray-900 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">What is LxDemos?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  LxDemos is a platform for discovering, sharing, and trying Linux configurations in real-time. Our
                  platform allows you to browse through a variety of configurations for tools like Vim, Bash, Zsh, Tmux,
                  and Neovim, and even test them in a real-time terminal emulator before downloading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  How does the terminal emulator work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Our terminal emulator is powered by a Docker container running Debian with ttyd and xterm.js. This
                  provides a secure, sandboxed environment where you can try out configurations without affecting your
                  local system. The terminal runs in your browser and connects to our backend server, allowing you to
                  execute commands and test configurations in real-time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  How can I contribute my own configurations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We welcome contributions from the community! To contribute your configurations, visit our Contribute
                  page where you can find detailed instructions for submitting your configurations. You can also
                  contribute to the platform itself by forking our GitHub repository and submitting pull requests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  Is LxDemos free to use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, LxDemos is completely free to use. We believe in open-source software and community
                  collaboration, so all features of the platform are available without charge. In the future, we may
                  offer premium features or supporter tiers to help sustain the project, but the core functionality will
                  always remain free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  How secure is the terminal emulator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Security is a top priority for us. The terminal emulator runs in a sandboxed Docker container,
                  isolated from other users and systems. Each session is temporary and all data is wiped after you close
                  the terminal. We also run the terminal as a non-root user and implement various security measures to
                  ensure that the system cannot be compromised.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  Can I save my changes in the terminal?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Currently, changes made in the terminal session are temporary and will be lost when you close the
                  terminal. However, you can copy any configurations you create or modify during your session and save
                  them locally. In the future, we plan to add features to allow registered users to save and share their
                  terminal sessions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  Which tools and configurations are supported?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We currently support configurations for Vim, Neovim, Bash, Zsh, and Tmux. We're continuously expanding
                  our library to include more tools and configuration types. If you'd like to see support for a specific
                  tool, please let us know through the Contact page or by creating an issue on our GitHub repository.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  How do I install configurations on my own system?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Each configuration includes detailed installation instructions specific to the tool it's for.
                  Generally, you'll download the configuration files and place them in the appropriate location on your
                  system (e.g., ~/.vimrc for Vim configurations). Always make a backup of your existing configurations
                  before installing new ones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  Do you offer support for custom configurations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While we don't offer official support for every configuration on the platform, our community forum is
                  a great place to ask questions and get help from other users. The configuration authors may also
                  provide support directly, depending on their availability. For platform-related issues, you can
                  contact our support team through the Contact page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-gray-700">
                <AccordionTrigger className="text-lg font-medium hover:text-red-500">
                  How can I report a bug or suggest a feature?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We appreciate bug reports and feature suggestions! The best way to report a bug or suggest a feature
                  is to create an issue on our GitHub repository. This allows us to track and prioritize all requests.
                  Alternatively, you can contact us through the Contact page if you prefer not to use GitHub.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-300">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

