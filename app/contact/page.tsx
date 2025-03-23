import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, MapPin, Github, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Contact Us</h1>
        <p className="mb-8 text-xl text-gray-300">Get in touch with the LxDemos team. We'd love to hear from you!</p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="bg-gray-900 p-6">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form>
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="bg-gray-800 border-gray-700 min-h-[150px] text-white"
                    required
                  />
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <Card className="mb-6 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 h-5 w-5 text-red-500" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@lxdemos.com" className="text-gray-300 hover:text-white">
                      contact@lxdemos.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 h-5 w-5 text-red-500" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="mr-3 mt-1 h-5 w-5 text-red-500" />
                  <div>
                    <h4 className="font-medium">Chat</h4>
                    <p className="text-gray-300">Join our Discord community</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/lxdemos"
                  className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/lxdemos"
                  className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.gg/lxdemos"
                  className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>

        <Card className="bg-gray-900 p-6">
          <h2 className="mb-6 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">How can I contribute to LxDemos?</h3>
              <p className="text-gray-300">
                You can contribute by submitting your configurations, helping with development on GitHub, or providing
                feedback. Visit our Contribute page for more information.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Is there a community forum?</h3>
              <p className="text-gray-300">
                Yes! We have an active Discord community where you can discuss configurations, get help with issues, and
                connect with other Linux enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">How do I report a bug?</h3>
              <p className="text-gray-300">
                The best way to report bugs is through our GitHub repository's issue tracker. Alternatively, you can use
                this contact form to report issues directly to our team.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">What is the response time for inquiries?</h3>
              <p className="text-gray-300">
                We typically respond to inquiries within 24-48 hours on business days. For urgent matters, Discord is
                often the fastest way to get assistance from our community.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

