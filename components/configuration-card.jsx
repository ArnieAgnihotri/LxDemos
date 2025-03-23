"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, Download, Plus, Info, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConfigurationCard({ config }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 transition-transform duration-300 ease-in-out"
      style={{ width: "280px", height: isHovered ? "320px" : "180px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`h-full w-full overflow-hidden bg-gray-800 transition-all duration-300 ${
          isHovered ? "scale-110 shadow-xl z-10" : ""
        }`}
      >
        <div className="relative h-full w-full">
          {/* Card background - using a placeholder */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900"
            style={{
              backgroundImage: `url('/taylor.png?height=320&width=280&text=${encodeURIComponent(config.title)}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">{config.title}</h3>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="h-4 w-4 fill-yellow-400" />
                <span className="text-sm">{config.stars}</span>
              </div>
            </div>

            {isHovered && (
              <div className="animate-fadeIn">
                <p className="mb-4 text-sm text-gray-300">{config.description}</p>
                <p className="mb-4 text-xs text-gray-400">By @{config.author}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-white text-black hover:bg-white/90">
                    <Download className="mr-1 h-3 w-3" /> Get
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-400 bg-transparent text-white hover:bg-white/10"
                  >
                    <Terminal className="mr-1 h-3 w-3" /> Try
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-400 bg-transparent text-white hover:bg-white/10"
                  >
                    <Plus className="mr-1 h-3 w-3" /> List
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-400 bg-transparent text-white hover:bg-white/10"
                  >
                    <Info className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

