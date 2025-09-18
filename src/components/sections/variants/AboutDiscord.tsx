"use client";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Code,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Languages,
  Music2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutDiscord = () => {
  return (
    <section id="about" className="px-4 md:px-20 py-20 md:py-32">
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        About Me
      </h2>

      <div className="grid grid-cols-12 max-w-6xl mx-auto gap-6 bg-card rounded-xl p-12">
        {/* Left: Profile Info */}
        <div className="col-span-12 md:col-span-5">
          <Card className="bg-card h-full pt-0">
            <CardHeader className="w-full h-[200px] bg-primary rounded-t-xl ">
              <Image
                src="/me.png"
                alt="Profile picture"
                width={160}
                height={160}
                className="rounded-full border-4 border-foreground shadow-md mt-30 bg-yellow-500"
              />
            </CardHeader>
            <CardContent className="flex flex-col items-start py-20">
              {/* Portrait */}

              <h3 className="text-xl font-bold mt-4">Aqiel Ilhamy</h3>
              <p className="text-muted-foreground text-start mt-2 mb-6">
                Building full-stack applications, clean UI/UX, and learning new
                tech.
              </p>

              {/* Sections inside one card */}
              <div className="w-full space-y-6">
                {/* Programming */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5 text-primary" />
                    <p className="font-medium">Programming Languages</p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-card-foreground">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <p className="font-medium">Education</p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-card-foreground">
                    <li>Bachelor of Information Systems</li>
                    <li>Thesis: Web App for MSMEs with MERN stack</li>
                  </ul>
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="w-5 h-5 text-primary" />
                    <p className="font-medium">Languages</p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-card-foreground">
                    <li>Indonesian (Native)</li>
                    <li>English (TOEFL ITP 607)</li>
                    <li>Japanese (N4)</li>
                  </ul>
                </div>

                {/* Tech badges */}
                <div>
                  <p className="font-medium mb-2">Familiar Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "Tailwind CSS",
                      "Material UI",
                      "Shadcn/UI",
                      "Framer Motion",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "PostgreSQL",
                      "Redis",
                      "Git",
                    ].map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Recent Activity */}
        <div className="col-span-12 md:col-span-7 hidden md:block">
          <Card className="bg-card h-full border-none">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What I’ve been up to lately</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 w-full">
                <Card className="bg-card hover:bg-background cursor-pointer">
                  <CardContent>
                    <div className="flex gap-4 items-center">
                      <Image
                        src="/vscode.png"
                        alt="Visual Studio Code"
                        width={192}
                        height={192}
                        className="w-24 h-24"
                      />
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Visual Studio Code</h2>
                        <p className="text-muted-foreground">
                          Last played : 2h ago
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card hover:bg-background cursor-pointer">
                  <CardContent>
                    <div className="flex gap-4 items-center">
                      <Image
                        src="/dota2.png"
                        alt="Dota 2"
                        width={192}
                        height={192}
                        className="w-24 h-24"
                      />
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Dota 2</h2>
                        <p className="text-muted-foreground">
                          Last played : 5d ago
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutDiscord;
