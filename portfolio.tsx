"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardSubTitle, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center pl-8">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Wesley Jennings</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#education" className="transition-colors hover:text-foreground/80">
              Education
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Wesley Jennings</h1>
            <p className="text-xl text-muted-foreground md:text-2xl">Backend Software Developer & Computer Science Student</p>
          </div>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Passionate about building robust software, from backend systems and data pipelines to low-level systems programming.
            Currently pursuing a Bachelor's in Computer Science with a Mathematics minor, and an accelerated Master's, at the University of Missouri.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground mt-2">Get to know me better</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated Computer Science student with a passion for solving complex problems through
                  technology. My experience spans backend development, systems programming, machine learning, and
                  distributed computing, from enterprise Java and Spring Boot data pipelines to filesystems and
                  networking in C/C++. I enjoy working in collaborative environments and am always eager for challenges
                  and to learn new technologies and methodologies.
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Swift</Badge>
                    <Badge variant="secondary">Bash</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">C++</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">Spring Batch</Badge>
                    <Badge variant="secondary">Hibernate</Badge>
                    <Badge variant="secondary">Apache PDFBox</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Oracle</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Tools & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-16 bg-muted/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
            <p className="text-muted-foreground mt-2">My academic background</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accelerated Master's of Computer Science</CardTitle>
                <CardDescription>University of Missouri - Columbia • Expected May 2027</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pursuing an accelerated Master's degree, earning graduate credit concurrently with my undergraduate studies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardSubTitle>Minor in Mathematics</CardSubTitle>
                <CardDescription>University of Missouri - Columbia • Expected May 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Cumulative GPA:</strong> 3.85/4.0
                  </p>
                  <p>
                    <strong>Relevant Coursework:</strong> Algorithm Design 1-3, Parallel Programming (HPC), Operating Systems,
                    Computer Networks, Object-Oriented Programming, Calculus I - III, Differential Equations, Machine Learning,
                    Software Security, Artificial Intelligence, Computer Org and Assembly Language, Database Application and Info Systems
                  </p>
                </div>
              </CardContent>
            </Card>

            {/*}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  <li>• AWS Certified Cloud Practitioner (2023)</li>
                  <li>• Google Analytics Certified (2023)</li>
                  <li>• FreeCodeCamp Full Stack Development (2022)</li>
                </ul>
              </CardContent>
            </Card>*/}
          </div>
        </div>
      </section>
      

      {/* Experience Section */}
      <section id="experience" className="w-full py-16">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
            <p className="text-muted-foreground mt-2">Where I've worked</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Backend Software Developer Intern</CardTitle>
                <CardSubTitle>NISC (National Information Solutions Cooperative)</CardSubTitle>
                <CardDescription>May 2026 - Aug 2026</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold">Oracle-to-PostgreSQL Migration</h4>
                  <div className="flex flex-wrap gap-1 my-2">
                    <Badge variant="outline" className="text-xs">Java</Badge>
                    <Badge variant="outline" className="text-xs">Spring Boot</Badge>
                    <Badge variant="outline" className="text-xs">Spring Batch</Badge>
                    <Badge variant="outline" className="text-xs">Hibernate</Badge>
                    <Badge variant="outline" className="text-xs">Apache PDFBox</Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Replaced a legacy Crystal Reports batch job with a Spring Boot / Spring Batch application, using
                      Hibernate ScrollableResults to stream across five joined entities for memory-efficient processing on
                      both Oracle and PostgreSQL.
                    </li>
                    <li>
                      Built a multi-section PDF reporting engine with Apache PDFBox (dynamic grouping, subtotals,
                      grand-total aggregation, cross-category deduplication), slated for the company's annual year-end processing.
                    </li>
                    <li>
                      Verified cross-engine correctness with JUnit 5 and Testcontainers integration tests against isolated
                      Oracle and PostgreSQL containers.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Credit-Transfer Provider Priority</h4>
                  <div className="flex flex-wrap gap-1 my-2">
                    <Badge variant="outline" className="text-xs">Java</Badge>
                    <Badge variant="outline" className="text-xs">SQL</Badge>
                    <Badge variant="outline" className="text-xs">Bash</Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Refactored a legacy Java billing module by swapping integer-based dispatch for a polymorphic enum,
                      extracting shared loops to remove redundant SQL, and eliminating mutable inter-method state, cutting
                      code volume ~40% with verified behavioral parity to production.
                    </li>
                    <li>
                      Implemented configurable provider-priority ordering for credit-transfer targets, combining SQL-driven
                      ranking with an extensible class hierarchy for override behavior.
                    </li>
                    <li>
                      Developed a Bash script to automate credit-transfer batch runs, integrated into the company's year-end
                      processing pipeline.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/projects/nba-spread-prediction">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>NBA Spread Prediction Model</CardTitle>
                  <CardDescription>
                    A multi-model NBA spread analysis pipeline combining statistical edge models with a GPT synthesis layer for game predictions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Scikit-Learn</Badge>
                    <Badge variant="outline" className="text-xs">GPT-4.1</Badge>
                    <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                    <Badge variant="outline" className="text-xs">Tkinter</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/unix-filesystem">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Unix-Style Filesystem</CardTitle>
                  <CardDescription>
                    An inode-based filesystem built from scratch in C over a 256 MB virtual block store, with persistent storage and a POSIX-like API.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">C</Badge>
                    <Badge variant="outline" className="text-xs">Systems Programming</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/tcp-chat">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Multi-Client TCP Chat</CardTitle>
                  <CardDescription>
                    A multithreaded TCP chat server and client in C++ with Winsock2, supporting broadcast and private messaging with real-time presence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">C++</Badge>
                    <Badge variant="outline" className="text-xs">Winsock2</Badge>
                    <Badge variant="outline" className="text-xs">Multithreading</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/beowulf-cluster">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Homemade Beowulf Cluster</CardTitle>
                  <CardDescription>
                    A commodity Beowulf cluster built from old desktops and laptops, running distributed MPI jobs across nodes over an NFS-shared filesystem.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">Linux</Badge>
                    <Badge variant="outline" className="text-xs">C</Badge>
                    <Badge variant="outline" className="text-xs">MPI / MPICH</Badge>
                    <Badge variant="outline" className="text-xs">NFS</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/stock-indicator-ml">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Stock Indicator ML</CardTitle>
                  <CardDescription>
                    A lite weight Machine Learning model that predicts the stock market using years of S&P 500 data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Pandas
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Scikit-Learn
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      yFinance
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/2d-game-engine">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>2-D Game Engine</CardTitle>
                  <CardDescription>A simple 2-D game engine built in Java with custom rendering and physics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Java
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Gimp
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/car-web-scraper">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Car Web Scraper</CardTitle>
                  <CardDescription>
                    Python based web scraper that scrapes car data from a website and saves it to a CSV file.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      BeautifulSoup
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      CSV
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Selenium
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/minecraft-mod">
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Minecraft Mod</CardTitle>
                  <CardDescription>A Minecraft mod that adds a new items, blocks, world generation, and more to the game.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Java
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Gradle
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Gimp
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Forge
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 bg-muted/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
            <p className="text-muted-foreground mt-2">Let's discuss opportunities</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link 
                        href="mailto:WesJennings04@gmail.com?subject=Portfolio%20Inquiry" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        WesJennings04@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link 
                        href="tel:+13149398792" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +1 (314) 939-8792
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <Link 
                        href="https://www.linkedin.com/in/wesley-jennings-987577314" 
                        target="_blank" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        https://www.linkedin.com/in/wesley-jennings-987577314
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Wildwood, MO</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm always interested in new opportunities and collaborations.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button asChild>
                      <Link href="mailto:wesjennings04@gmail.com?subject=Portfolio%20Inquiry">Send Email</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/resume.pdf" target="_blank">
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-8">
          <p className="text-sm text-muted-foreground px-8 md:px-0 md:mr-auto">© 2026 Wesley Jennings</p>
          <div className="flex gap-4 md:ml-auto">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/WesJennings" target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/wesley-jennings-987577314" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
