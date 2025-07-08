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
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Wesley Jennings</h1>
            <p className="text-xl text-muted-foreground md:text-2xl">Software Engineer & Computer Science Student</p>
          </div>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Passionate about creating innovative solutions through code. Currently pursuing a Bacholors in Computer Science and dual credits towards
            a Master's, with a minor in Mathematics.
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
      <section id="about" className="container py-16">
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
                  technology. My experience spans machine learning, game development, and web development
                  projects. I enjoy working in collaborative environments and am always eager for challenges and to learn new technologies
                  and methodologies.
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
                  <h3 className="font-semibold mb-3">Technologies/Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">DevOps Technologies</h3>
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
      <section id="education" className="container py-16 bg-muted/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
            <p className="text-muted-foreground mt-2">My academic background</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardSubTitle>Minor in Mathematics</CardSubTitle>
                <CardDescription>University of Missouri - Columbia • Aug 2023 - May 2025 (Expected)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Cumulative GPA:</strong> 3.857/4.0
                  </p>
                  <p>
                    <strong>Relevant Coursework:</strong> Object Oriented Programming - Java, Calculus I - III, Differential Equations, 
                    Algorithm Design 1-3 - C, Intro to Machine Learning, Web Application Dev 1, Computer Org and Assembly Language, 
                    Database Application and Info Systems, Public Speaking
                  </p>
                  <p>
                    <strong>Honors:</strong> High Dean's List (Fall 2023, Spring 2024, Fall 2024, Spring 2025)
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
      

      {/* Projects Section */}
      <section id="projects" className="container py-16 px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section id="contact" className="container py-16 bg-muted/50">
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
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground px-8">© 2024 Wesley Jennings</p>
          <div className="flex gap-4">
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
