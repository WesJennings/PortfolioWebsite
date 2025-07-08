import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MinecraftMod() {
  return (
    <div className="container py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Minecraft Mod</h1>
        <p className="text-xl text-muted-foreground">
          Custom Minecraft mod with new blocks, items, and gameplay mechanics using Forge
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/WesJennings/MinecraftModding" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8">
        <Image
          src="/minecraftSS.png?height=400&width=800"
          alt="Minecraft Mod Visualization"
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
            <Badge>Minecraft Forge</Badge>
            <Badge>Gradle</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This project is a Minecraft mod developed using Java and the Forge modding API. It introduces new blocks, 
            items, recipes, and gameplay mechanics to enhance the Minecraft experience. The mod features custom blocks, 
            entities, crafting recipes, and world generation elements, providing players with new resources and interactive features.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Custom blocks such as Alexandrite Block, Growth Chamber, Magic Block, and more</li>
            <li>• New items including tools, armor, and special items like the Chisel and Hammer</li>
            <li>• Unique crafting recipes and custom recipe types </li>
            <li>• Custom block entities with interactive GUIs </li>
            <li>• New world generation features, including custom ores in Overworld, Nether, and End</li>
            <li>• Data-driven configuration for loot tables, advancements, and block states</li>
            <li>• Integration with Minecraft's creative mode tabs and custom food properties</li>
            <li>• Data visualization through in-game GUIs for custom blocks</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Developed in Java using the Minecraft Forge modding framework</li>
            <li>• Utilizes Gradle for build automation and dependency management</li>
            <li>• Implements custom block and item classes, block entities, and screen handlers</li>
            <li>• Uses JSON files for blockstates, models, loot tables, recipes, and advancements</li>
            <li>• Registers custom recipes and block entities for new gameplay mechanics</li>
            <li>• Handles world generation with custom biome modifiers and ore placement logic</li>
            <li>• Organized codebase for scalability and maintainability</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Mod Performance</h4>
              <p className="text-muted-foreground">
                Successfully adds a variety of new content and mechanics to Minecraft.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                Minecraft has always been one of my favorite games and I loved mod packs, so I wanted to be able to make my own.
                This can be improved simply by adding more features and mechanics to the mod such as more blocks, items, adding entities, and creating
                compatability with other mods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">20+</div>
            <p className="text-sm text-muted-foreground">Custom Blocks & Items</p>
          </CardContent>
        </Card>
        
      </div>
    </div>
  )
}
