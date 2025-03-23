"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Terminal } from "lucide-react"
// Update the import to use the correct return type
import { getConfigurationById } from "@/lib/config-data"

export default function LastViewedConfig() {
  const [lastViewedConfig, setLastViewedConfig] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLastViewed = async () => {
      try {
        const response = await fetch("/api/user/last-viewed/get")
        if (response.ok) {
          const data = await response.json()
          if (data.configId) {
            const config = getConfigurationById(data.configId)
            setLastViewedConfig(config)
          }
        }
      } catch (error) {
        console.error("Error fetching last viewed configuration:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLastViewed()
  }, [])

  if (isLoading) {
    return (
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Last Viewed</CardTitle>
          <CardDescription>Loading your last viewed configuration...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  if (!lastViewedConfig) {
    return (
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Last Viewed</CardTitle>
          <CardDescription>You haven't viewed any configurations yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/">
            <Button className="w-full bg-red-600 hover:bg-red-700">Browse Configurations</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Last Viewed</CardTitle>
            <CardDescription>Continue where you left off</CardDescription>
          </div>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{lastViewedConfig.title}</h3>
            <p className="text-sm text-gray-400">{lastViewedConfig.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {lastViewedConfig.industries.slice(0, 2).map((industry: string) => (
              <span key={industry} className="rounded-full bg-gray-800 px-3 py-1 text-xs">
                {industry}
              </span>
            ))}
          </div>
          <Link href={`/${lastViewedConfig.category}/${lastViewedConfig.id}`}>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Terminal className="mr-2 h-4 w-4" /> Continue
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

