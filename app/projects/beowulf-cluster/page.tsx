import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BeowulfCluster() {
  return (
    <div className="w-full py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Homemade Beowulf Cluster</h1>
        <p className="text-xl text-muted-foreground">
          A commodity Beowulf cluster built from old desktops and laptops, running distributed MPI jobs across nodes
        </p>
      </div>

      {/* Tech Stack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Linux</Badge>
            <Badge>Ubuntu Server</Badge>
            <Badge>C</Badge>
            <Badge>MPICH</Badge>
            <Badge>MPI</Badge>
            <Badge>NFS</Badge>
            <Badge>SSH</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Demo Video */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/lw0BFAriTsA"
            title="Homemade Beowulf Cluster Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A commodity Beowulf cluster assembled from old desktops and laptops. I installed Ubuntu Server on each node
            and configured the networking, shared storage, and process management needed to distribute parallel MPI jobs
            across the cluster.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • Built from commodity hardware running Ubuntu Server, with static IP networking, hostname resolution, and
              passwordless SSH across nodes
            </li>
            <li>• NFS-shared filesystem and a common MPI user across the cluster</li>
            <li>• MPICH deployed with the Hydra process manager to distribute jobs across nodes</li>
            <li>
              • Validated by creating and running MPI test programs across all nodes, verifying process distribution and
              inter-node communication
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Cluster networking configured for reliable node-to-node communication and discovery</li>
            <li>• Shared NFS storage so all nodes access a common working directory and MPI binaries</li>
            <li>• Hydra process manager to launch and coordinate distributed MPI processes</li>
            <li>• Test programs to confirm correct process placement and message passing between nodes</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Performance</h4>
              <p className="text-muted-foreground">
                The Beowulf cluster successfully handled distributed MPI jobs across all nodes, demonstrating the effectiveness of the cluster architecture. The use of MPICH and Hydra allowed for efficient process management and communication.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                This was a project for my Master level Parallel Programming course that a group of students and I were able to complete instead of a traditional research paper to gain some hands-on experience with distributed computing. 
                It provided valuable insights into cluster architecture, networking, parallel programming techniques, and especially debugging in the terminal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">4-Node</div>
            <p className="text-sm text-muted-foreground">Distributed Cluster</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
