import Terminal from "@/components/terminal"

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-3xl font-bold">LxDemos Terminal</h1>
        <p className="mb-8 text-lg text-gray-300">
          This is a real-time Debian terminal emulator. You can try out Linux configurations and commands directly in
          your browser.
        </p>

        <div className="mb-8">
          <Terminal fullScreen={false} />
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">About the Terminal</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Features</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>Real-time command execution</li>
                <li>Debian-based Linux environment</li>
                <li>Try configurations before downloading</li>
                <li>Test shell scripts and commands</li>
                <li>Fullscreen mode for better visibility</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Technical Details</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>Powered by xterm.js for terminal emulation</li>
                <li>Backend using ttyd in a Docker container</li>
                <li>Debian Linux environment</li>
                <li>Secure sandboxed execution</li>
                <li>Common Linux tools pre-installed</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Try These Commands</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CommandCard
              title="System Information"
              command="cat /etc/os-release"
              description="View information about the Linux distribution"
            />
            <CommandCard
              title="Directory Listing"
              command="ls -la"
              description="List all files in the current directory with details"
            />
            <CommandCard
              title="Disk Usage"
              command="df -h"
              description="Check disk space usage in human-readable format"
            />
            <CommandCard
              title="Memory Usage"
              command="free -m"
              description="Display memory usage information in megabytes"
            />
            <CommandCard title="Process List" command="ps aux" description="Show all running processes" />
            <CommandCard
              title="Network Information"
              command="ip addr"
              description="Display network interface information"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CommandCard({ title, command, description }) {
  return (
    <div className="rounded-lg bg-gray-900 p-4">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="mb-2 rounded bg-gray-800 p-2 font-mono text-sm text-green-400">{command}</div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

