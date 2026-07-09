import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"

export default function TcpChat() {
  return (
    <div className="w-full py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Multi-Client TCP Chat System</h1>
        <p className="text-xl text-muted-foreground">
          A multithreaded TCP chat server and client in C++ with Winsock2, supporting broadcast and private messaging
          with real-time presence
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link
              href="https://github.com/WesJennings/MultithreadTCPChat"
              target="_blank"
              className="flex items-center gap-2"
            >
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
            <Badge>C++</Badge>
            <Badge>Winsock2</Badge>
            <Badge>Multithreading</Badge>
            <Badge>TCP/IP</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A multithreaded TCP chat server and client written in C++ with Winsock2. The server dedicates a thread per
            connection and synchronizes shared state with mutexes to safely support many concurrent sessions, offering
            broadcast and private messaging with real-time presence notifications.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Thread-per-connection server architecture for concurrent client sessions</li>
            <li>
              • Shared state synchronized with CRITICAL_SECTION mutexes to prevent race conditions across concurrent
              sessions
            </li>
            <li>• Broadcast and private messaging with real-time presence notifications</li>
            <li>• Persistent user accounts via thread-safe file I/O</li>
            <li>• Authentication and input validation enforced before command dispatch</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Low-level socket programming with the Winsock2 API</li>
            <li>• Per-connection threading with explicit mutex-guarded critical sections</li>
            <li>• Command-based protocol with server-side validation and authentication</li>
            <li>• Thread-safe persistence of user accounts to disk</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
