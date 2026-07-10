import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"

export default function UnixFilesystem() {
  return (
    <div className="w-full py-8 px-8 max-w-4xl">
      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">Unix-Style Filesystem</h1>
        <p className="text-xl text-muted-foreground">
          An inode-based filesystem implemented from scratch in C over a 256 MB virtual block store, with persistent
          storage and a POSIX-like API
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link
              href="https://github.com/WesJennings/OperatingSystems/tree/main/a5_FileSystem"
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
            <Badge>C</Badge>
            <Badge>Systems Programming</Badge>
            <Badge>Operating Systems</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A complete inode-based filesystem written from scratch in C, layered over a 256 MB virtual block store. It
            supports formatting, mounting, unmounting, and persistent storage that survives across sessions, exposing a
            POSIX-like API for file and directory operations.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Format, mount, unmount, and persistent storage across sessions over a 256 MB virtual block store</li>
            <li>
              • Three-level block addressing scheme (6 direct pointers, single indirect, and double indirect) enabling
              large-file support with on-demand block allocation
            </li>
            <li>• Full read/write/seek semantics tracked per file descriptor</li>
            <li>
              • POSIX-like API: create, open, close, remove, move, link, and get_dir, with hard links via inode reference
              counting
            </li>
            <li>• Absolute-path directory traversal and a bitmap-managed free inode table</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Inode-based design mirroring classic Unix filesystem architecture</li>
            <li>• Indirect and double-indirect block pointers to scale to large files without wasting metadata</li>
            <li>• Reference counting to support hard links while safely reclaiming freed inodes</li>
            <li>• Bitmap allocation for efficient tracking of free inodes and blocks</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Results & Insights</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Performance</h4>
              <p className="text-muted-foreground">
                The filesystem successfully supports large files and directories with efficient block allocation, demonstrating the effectiveness of the inode-based design. The use of indirect pointers allows for scalable file sizes without excessive metadata overhead.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Development Insights</h4>
              <p className="text-muted-foreground">
                This was a long term project for my Operating Systems course, and it provided valuable experience in low-level systems programming, memory management, and filesystem design. 
                Through this project I found a real joy in solving and debugging low level problems, especially the more difficult issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">256 MB</div>
            <p className="text-sm text-muted-foreground">Virtual Block Store</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold">3-Level</div>
            <p className="text-sm text-muted-foreground">Block Addressing</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
