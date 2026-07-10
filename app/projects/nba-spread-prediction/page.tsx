import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"

export default function NbaSpreadPrediction() {
  return (
    <div className="w-full py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">NBA Spread Prediction Model</h1>
        <p className="text-xl text-muted-foreground">
          A multi-model NBA spread analysis pipeline that combines statistical edge models with a GPT synthesis layer to
          generate per-game betting recommendations
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/SchroederBen/ABJW-Bets" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Tech Stack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>Scikit-Learn</Badge>
            <Badge>Logistic Regression</Badge>
            <Badge>GPT-4.1-mini</Badge>
            <Badge>Neon PostgreSQL</Badge>
            <Badge>NBA API</Badge>
            <Badge>Tkinter</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This project is an end-to-end NBA betting decision-support system. It fuses quantitative modeling with a
            large-language-model synthesis layer: statistical models compute projected margins and cover probabilities,
            and GPT-4.1-mini reasons over those signals to produce a final pick, confidence score, and risk flags for
            each game.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • Multi-model statistical edge engine combining four versions of the model, including L1 and L2 logistic
              regression, to compute projected margins, fair spreads, cover probabilities, and per-game expected value
            </li>
            <li>
              • GPT-4.1-mini synthesis layer with a structured system prompt and enforced JSON schema output, fed the
              quantitative signals to generate a final pick, confidence score, and risk flags
            </li>
            <li>• Historical game data pulled from a Neon PostgreSQL database and live odds from the NBA API</li>
            <li>• Tkinter GUI with live and demo prediction modes, progress tracking, and result export</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• End-to-end pipeline from data ingestion through modeling to final recommendation output</li>
            <li>• L1 and L2 regularized logistic regression for edge estimation across multiple model versions</li>
            <li>• Enforced JSON schema on the LLM output for reliable, machine-readable predictions</li>
            <li>• Confidence scoring and risk flagging to communicate uncertainty on every pick</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Performance</h4>
              <p className="text-muted-foreground">
                  Due to time constraints we were unable to test the model intensively. However, for a set of 11 NBA playoff games the model produced 7 correct picks. 
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                This was my Computer Science capstone project along with 3 other classmates. We all enjoyed sports, machine learning, and AI so we decided to combine all of those interests into a single project.
                This project was a great opportunity to learn about an entire machine learning and AI pipeline, from data ingestion and cleaning, to model training and evaluation, to deployment and user interface design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">4</div>
            <p className="text-sm text-muted-foreground">Statistical Models Combined</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">L1 &amp; L2</div>
            <p className="text-sm text-muted-foreground">Logistic Regression</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
