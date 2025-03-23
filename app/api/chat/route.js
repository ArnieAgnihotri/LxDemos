import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// This is the API route for the chatbot
export async function POST(request) {
  try {
    const { messages } = await request.json()

    // Ensure we have messages to process
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    // Format the conversation for the AI model
    const formattedPrompt = formatConversation(messages)

    // Generate a response using the AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: formattedPrompt,
      system:
        "You are LinuxHelper, an AI assistant specialized in Linux configurations and terminal commands. You provide helpful, concise advice about Linux tools like Vim, Bash, Zsh, Tmux, and Neovim. You can explain configuration options, suggest best practices, and help troubleshoot common issues. Your responses are friendly, informative, and focused on helping users improve their Linux environment.",
    })

    return NextResponse.json({
      response: text,
      id: Date.now().toString(),
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

// Helper function to format the conversation for the AI model
function formatConversation(messages) {
  return (
    messages
      .map((msg) => {
        const role = msg.role === "user" ? "User" : "Assistant"
        return `${role}: ${msg.content}`
      })
      .join("\n\n") + "\n\nAssistant:"
  )
}

