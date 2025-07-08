import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CarWebScraper() {
  return (
    <div className="container py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Car Web Scraper</h1>
        <p className="text-xl text-muted-foreground">
          Automated car data collection and processing system using Python web scraping
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/WesJennings/CarScraper" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Image 
      <div className="mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Car Web Scraper Visualization"
          width={800}
          height={400}
          className="rounded-lg border shadow-lg w-full"
        />
      </div>*/}

      {/* Tech Stack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>Requests</Badge>
            <Badge>BeautifulSoup</Badge>
            <Badge>CSV</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This project is a car data scraper that automates the process of collecting car listings from online sources. 
            It uses Python scripts to fetch, filter, and process car data, storing the results in a structured CSV format 
            for further analysis or use.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Automated scraping of car listings from online sources</li>
            <li>• Filtering of car data based on user-defined criteria</li>
            <li>• Export of processed car data to CSV for easy analysis</li>
            <li>• Modular Python scripts for scraping, filtering, and data conversion</li>
            <li>• Simple command-line interface for running different tasks</li>
            <li>• Easily customizable for different car sources or filtering needs</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Uses the requests library for HTTP requests to fetch web pages</li>
            <li>• Parses HTML content using BeautifulSoup for data extraction</li>
            <li>• Processes and filters car data using custom Python logic</li>
            <li>• Converts car data dictionaries to CSV using the built-in csv module</li>
            <li>• Modular script design: separate scripts for scraping, filtering, and exporting</li>
            <li>• Designed for extensibility to support additional data sources or output formats</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Project Performance</h4>
              <p className="text-muted-foreground">
                Successfully automated the collection and processing of car listings, significantly reducing manual effort 
                and time required for data gathering. The modular design allows for easy updates and customization.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                There was a chance I was going to need to buy a new car so I made this to help me find the best deals with the least amount of effort.
                This project could easily be improved upon by using a database to store the data, making it able to search multiple sources at once, ect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">100%</div>
            <p className="text-sm text-muted-foreground">Automation</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">CSV</div>
            <p className="text-sm text-muted-foreground">Export</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">Modular</div>
            <p className="text-sm text-muted-foreground">Scripts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">Custom</div>
            <p className="text-sm text-muted-foreground">Filtering</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
