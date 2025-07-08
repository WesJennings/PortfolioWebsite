import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GameEngine() {
  return (
    <div className="container py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">2-D Game Engine</h1>
        <p className="text-xl text-muted-foreground">
          A simple 2-D game engine built with java
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/WesJennings/WesEngine" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Project GIF */}
      <div className="mb-8">
        <Image
          src="/gameGif.gif"
          alt="Game Gif"
          width={800}
          height={400}
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
            <Badge>Java</Badge>
            <Badge>Java Swing</Badge>
            <Badge>Java AWT</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
          This project is a custom-built 2D game engine developed in Java. It provides a foundation for creating pixel-based games with real-time rendering, 
          audio playback, and a component-based architecture. 
          The engine leverages Java’s standard libraries for graphics, audio, and input handling, and features a custom game loop, physics, 
          and resource management system. The engine is designed to be easy to extend and modify, and is a great starting point for anyone looking to create their own 2D game.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Custom game loop with fixed 60 FPS update rate</li>
            <li>• Pixel-perfect 2D rendering using BufferedImage and BufferStrategy</li>
            <li>• Component-based architecture for flexible game object management</li>
            <li>• Built-in physics and collision detection system</li>
            <li>• Camera system for dynamic scene rendering</li>
            <li>• Audio playback using Java Sound API</li>
            <li>• Resource management for images, audio, and fonts</li>
            <li>• Support for PNG image assets and custom level design via images</li>
            <li>• Minimal external dependencies (pure Java, no third-party libraries)</li>
            <li>• Designed for extensibility and educational purposes</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Developed entirely in Java using standard libraries (AWT, Swing, Sound API)</li>
            <li>• Double-buffered rendering for smooth graphics</li>
            <li>• Custom input handling for keyboard and mouse events</li>
            <li>• Game objects managed via a component system for modularity</li>
            <li>• Physics and collision detection implemented from scratch</li>
            <li>• Level data loaded from PNG images, enabling visual level design</li>
            <li>• Audio system supports playback, looping, and volume control</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Performance</h4>
              <p className="text-muted-foreground">
                The game engine performs well for 60 FPS, and the physics and collision detection system is working as expected. The engine is capable 
                of handling simple 2D games.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                I made this project because I wanted to understand how games work at the most basic level.
                This engine is by no means perfect and can be improved upon greatly (such as it using the cpu instead of gpu) 
                but it tought me the basic level of how games truly work.
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
            <p className="text-sm text-muted-foreground">Java</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
