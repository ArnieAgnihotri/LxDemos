"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Save, RefreshCw, Bot, MessageSquare, Settings, Code } from "lucide-react"

export default function ChatbotConfigPage() {
  const [systemPrompt, setSystemPrompt] = useState(
    "You are LinuxHelper, an AI assistant specialized in Linux configurations and terminal commands. You provide helpful, concise advice about Linux tools like Vim, Bash, Zsh, Tmux, and Neovim. You can explain configuration options, suggest best practices, and help troubleshoot common issues. Your responses are friendly, informative, and focused on helping users improve their Linux environment.",
  )

  const [botName, setBotName] = useState("Linux Assistant")
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi there! I'm your Linux configuration assistant. How can I help you today?",
  )
  const [primaryColor, setPrimaryColor] = useState("#dc2626") // red-600
  const [enableAutoSuggestions, setEnableAutoSuggestions] = useState(true)
  const [enableCodeHighlighting, setEnableCodeHighlighting] = useState(true)
  const [maxTokens, setMaxTokens] = useState(1000)
  const [temperature, setTemperature] = useState(0.7)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate API call to save configuration
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real implementation, you would save the configuration to a database or API
    console.log("Saved configuration:", {
      systemPrompt,
      botName,
      welcomeMessage,
      primaryColor,
      enableAutoSuggestions,
      enableCodeHighlighting,
      maxTokens,
      temperature,
    })

    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-3xl font-bold">Chatbot Configuration</h1>
        <p className="mb-8 text-gray-300">Customize your Linux assistant chatbot to better suit your needs.</p>

        <Tabs defaultValue="general" className="mb-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="general">
              <Bot className="mr-2 h-4 w-4" /> General
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <MessageSquare className="mr-2 h-4 w-4" /> Appearance
            </TabsTrigger>
            <TabsTrigger value="behavior">
              <Settings className="mr-2 h-4 w-4" /> Behavior
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <Code className="mr-2 h-4 w-4" /> Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-4">
            <Card className="bg-gray-900 p-6">
              <h2 className="mb-4 text-xl font-bold">General Settings</h2>

              <div className="mb-4">
                <Label htmlFor="botName" className="mb-2 block">
                  Bot Name
                </Label>
                <Input
                  id="botName"
                  value={botName}
                  onChange={(e) => setBotName(e.target.value)}
                  className="bg-gray-800 text-white"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="welcomeMessage" className="mb-2 block">
                  Welcome Message
                </Label>
                <Textarea
                  id="welcomeMessage"
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  className="bg-gray-800 text-white"
                  rows={3}
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="systemPrompt" className="mb-2 block">
                  System Prompt
                </Label>
                <Textarea
                  id="systemPrompt"
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="bg-gray-800 text-white"
                  rows={6}
                />
                <p className="mt-1 text-xs text-gray-400">
                  This is the instruction given to the AI model that defines how the chatbot should behave.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="mt-4">
            <Card className="bg-gray-900 p-6">
              <h2 className="mb-4 text-xl font-bold">Appearance Settings</h2>

              <div className="mb-4">
                <Label htmlFor="primaryColor" className="mb-2 block">
                  Primary Color
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="primaryColor"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10 w-20 bg-gray-800 p-1"
                  />
                  <Input
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="bg-gray-800 text-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="codeHighlighting" className="cursor-pointer">
                    Enable Code Syntax Highlighting
                  </Label>
                  <Switch
                    id="codeHighlighting"
                    checked={enableCodeHighlighting}
                    onCheckedChange={setEnableCodeHighlighting}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-400">Highlight syntax in code blocks for better readability.</p>
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-lg font-semibold">Preview</h3>
                <div className="rounded-lg border border-gray-700 p-4">
                  <div className="mb-4 flex items-center">
                    <Bot className="mr-2 h-5 w-5" style={{ color: primaryColor }} />
                    <h3 className="font-medium">{botName}</h3>
                  </div>

                  <div className="mb-3 flex justify-start">
                    <div className="max-w-[80%] rounded-lg bg-gray-700 px-4 py-2 text-white">
                      <p className="text-sm">{welcomeMessage}</p>
                      <p className="mt-1 text-right text-xs opacity-70">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3 flex justify-end">
                    <div className="max-w-[80%] rounded-lg px-4 py-2" style={{ backgroundColor: primaryColor }}>
                      <p className="text-sm">How do I customize my Vim configuration?</p>
                      <p className="mt-1 text-right text-xs opacity-70">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg bg-gray-700 px-4 py-2 text-white">
                      <p className="text-sm">
                        To customize your Vim configuration, you'll need to edit your{" "}
                        <code className={enableCodeHighlighting ? "rounded bg-gray-800 px-1 text-green-400" : ""}>
                          ~/.vimrc
                        </code>{" "}
                        file. Here's a basic example:
                      </p>
                      {enableCodeHighlighting ? (
                        <pre className="mt-2 rounded bg-gray-800 p-2 text-xs text-green-400">
                          <code>
                            " Basic Vim configuration{"\n"}
                            set number{"\n"}
                            set syntax=on{"\n"}
                            set tabstop=4{"\n"}
                            set shiftwidth=4{"\n"}
                            set expandtab
                          </code>
                        </pre>
                      ) : (
                        <pre className="mt-2 rounded bg-gray-800 p-2 text-xs">
                          <code>
                            " Basic Vim configuration{"\n"}
                            set number{"\n"}
                            set syntax=on{"\n"}
                            set tabstop=4{"\n"}
                            set shiftwidth=4{"\n"}
                            set expandtab
                          </code>
                        </pre>
                      )}
                      <p className="mt-1 text-right text-xs opacity-70">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="behavior" className="mt-4">
            <Card className="bg-gray-900 p-6">
              <h2 className="mb-4 text-xl font-bold">Behavior Settings</h2>

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoSuggestions" className="cursor-pointer">
                    Enable Auto-Suggestions
                  </Label>
                  <Switch
                    id="autoSuggestions"
                    checked={enableAutoSuggestions}
                    onCheckedChange={setEnableAutoSuggestions}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-400">Suggest commands and configurations based on user input.</p>
              </div>

              <div className="mb-4">
                <Label htmlFor="temperature" className="mb-2 block">
                  Response Creativity (Temperature)
                </Label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    id="temperature"
                    min="0"
                    max="1"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(Number.parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <span className="w-12 text-center">{temperature}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Lower values make responses more deterministic, higher values make them more creative.
                </p>
              </div>

              <div className="mb-4">
                <Label htmlFor="maxTokens" className="mb-2 block">
                  Maximum Response Length (Tokens)
                </Label>
                <Input
                  id="maxTokens"
                  type="number"
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(Number.parseInt(e.target.value))}
                  className="bg-gray-800 text-white"
                  min="100"
                  max="4000"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Maximum length of the chatbot's responses. Higher values allow for more detailed answers.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-4">
            <Card className="bg-gray-900 p-6">
              <h2 className="mb-4 text-xl font-bold">Advanced Settings</h2>

              <div className="mb-4">
                <Label htmlFor="apiEndpoint" className="mb-2 block">
                  Custom API Endpoint (Optional)
                </Label>
                <Input
                  id="apiEndpoint"
                  placeholder="https://your-custom-api.com/chat"
                  className="bg-gray-800 text-white"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Use a custom API endpoint instead of the default one. Leave empty to use the default.
                </p>
              </div>

              <div className="mb-4">
                <Label htmlFor="customModel" className="mb-2 block">
                  AI Model
                </Label>
                <select id="customModel" className="w-full rounded-md bg-gray-800 p-2 text-white" defaultValue="gpt-4o">
                  <option value="gpt-4o">GPT-4o (Recommended)</option>
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="claude-3-opus">Claude 3 Opus</option>
                  <option value="claude-3-sonnet">Claude 3 Sonnet</option>
                  <option value="custom">Custom Model</option>
                </select>
                <p className="mt-1 text-xs text-gray-400">
                  Select the AI model to use for the chatbot. Different models have different capabilities.
                </p>
              </div>

              <div className="mb-4">
                <Label htmlFor="customHeaders" className="mb-2 block">
                  Custom Headers (JSON)
                </Label>
                <Textarea
                  id="customHeaders"
                  placeholder='{"Authorization": "Bearer YOUR_TOKEN"}'
                  className="bg-gray-800 text-white font-mono"
                  rows={3}
                />
                <p className="mt-1 text-xs text-gray-400">
                  Add custom headers to API requests in JSON format. Useful for authentication.
                </p>
              </div>

              <div className="mb-4">
                <Label htmlFor="debugMode" className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span>Debug Mode</span>
                    <Switch id="debugMode" />
                  </div>
                </Label>
                <p className="mt-1 text-xs text-gray-400">
                  Enable debug mode to see detailed logs in the browser console.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4">
          <Button variant="outline" className="border-gray-600 bg-transparent text-white hover:bg-gray-800">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset to Defaults
          </Button>
          <Button className="bg-red-600 hover:bg-red-700" onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" /> Save Configuration
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

