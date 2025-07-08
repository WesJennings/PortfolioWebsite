import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StockIndicatorML() {
  return (
    <div className="w-full py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Stock Indicator ML</h1>
        <p className="text-xl text-muted-foreground">
          A lightweight Machine Learning model that predicts the stock market using years of S&P 500 data
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/WesJennings/StockIndicator" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8">
        <Image
          src="/stockIndicator1.png?height=400&width=800"
          alt="Stock Indicator ML Model Visualization"
          width={800}
          height={400}
          className="rounded-lg border shadow-lg w-full"
        />
      </div>

      <div className="mb-8">
        <Image
          src="/stockIndicator2.png?height=300&width=600"
          alt="Stock Indicator ML Model Visualization"
          width={600}
          height={300}
          className="rounded-lg border shadow-lg w-full"
        />
      </div>

      {/* Tech Stack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>Pandas</Badge>
            <Badge>Scikit-Learn</Badge>
            <Badge>yFinance</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This machine learning project focuses on stock market prediction using historical S&P 500 data.
            The lightweight model analyzes market patterns, technical indicators, and price movements to
            provide predictions for stock market trends and potential investment opportunities.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• S&P 500 data collection using yFinance API</li>
            <li>• Technical indicator calculation (RSI, MACD, Moving Averages)</li>
            <li>• Feature engineering for price patterns and volume analysis</li>
            <li>• Machine learning model training on historical data</li>
            <li>• Stock price prediction and trend analysis</li>
            <li>• Logistic Regression model</li>
            <li>• Risk assessment and confidence scoring</li>
            <li>• Lightweight and efficient processing pipeline</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Data collection from Yahoo Finance API (yFinance)</li>
            <li>• Feature engineering with technical indicators</li>
            <li>• Data preprocessing and normalization</li>
            <li>• Logistic Regression model</li>
            <li>• Cross-validation for model reliability</li>
            <li>• Performance evaluation with financial metrics</li>
            <li>• Visualization of predictions and market trends</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Model Performance</h4>
              <p className="text-muted-foreground">
                Successfully predicted stock market trends with around 80% accuracy. Weighs features like Daily Return much higher than other features.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Improvements</h4>
              <p className="text-muted-foreground">
                A more complex model such as K nearest neighbors would greatly improve the accuracy of the model. 
                A quicker addition that could improve accuracy would be PCA for dimension reduction. Also could run it with more
                than 4 features in a set but was limited by computational power/time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">80%</div>
            <p className="text-sm text-muted-foreground">Accuracy</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">Logistic Regression</div>
            <p className="text-sm text-muted-foreground">Model</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">4</div>
            <p className="text-sm text-muted-foreground">Features Chosen</p>
          </CardContent>
        </Card>
        
      </div>
    </div>
  )
}
