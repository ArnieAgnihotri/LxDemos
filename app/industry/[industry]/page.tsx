import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Terminal } from "lucide-react"
import { getConfigurationsByIndustry, type IndustryCategory, getAllIndustries } from "@/lib/config-data"

export default function IndustryPage({ params }: { params: { industry: string } }) {
  // Decode the industry from URL
  const decodedIndustry = decodeURIComponent(params.industry.replace(/-/g, " "))

  // Check if the industry exists
  const allIndustries = getAllIndustries()
  const industryExists = allIndustries.includes(decodedIndustry as IndustryCategory)

  if (!industryExists) {
    notFound()
  }

  const industry = decodedIndustry as IndustryCategory
  const configurations = getConfigurationsByIndustry(industry)

  return (
    <div className="min-h-screen bg-black pb-20 pt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <h1 className="mb-2 text-4xl font-bold">{industry} Configurations</h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and try configurations optimized for {industry.toLowerCase()} workflows.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {configurations.map((config) => (
            <Link key={`${config.category}-${config.id}`} href={`/${config.category}/${config.id}`}>
              <Card className="h-full bg-gray-900 hover:bg-gray-800 transition-colors">
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{config.title}</h3>
                  <div className="mb-2 flex items-center gap-1 text-yellow-400">
                    <span>★</span>
                    <span>{config.stars}</span>
                  </div>
                  <p className="mb-4 text-sm text-gray-300">{config.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-800 px-3 py-1 text-xs capitalize">{config.category}</span>
                    {config.industries.slice(0, 2).map((ind) => (
                      <span key={ind} className="rounded-full bg-gray-800 px-3 py-1 text-xs">
                        {ind}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Terminal className="mr-2 h-4 w-4" /> View Configuration
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

