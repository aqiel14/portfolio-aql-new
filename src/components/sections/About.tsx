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
import { Badge } from "../ui/badge";
import { Code, GraduationCap, Languages } from "lucide-react";
import AboutSpotify from "./variants/AboutSpotify";
import { useTheme } from "@/providers/ThemeProvider";

export default function About() {
  const { theme } = useTheme();

  switch (theme) {
    case "spotify":
      return <AboutSpotify />;
    default:
      return (
        <section className="min-h-0 md:min-h-screen px-4 md:px-20 py-20 md:py-32">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-12 max-w-5xl mx-auto gap-4 md:gap-12 items-center">
            {/* Portrait */}
            <div className="flex col-span-12 md:col-span-4 justify-center">
              <Image
                src="/me.png" // replace with your own portrait
                alt="Your portrait"
                width={320}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Info */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                I’m a passionate software engineer with experience in building
                full-stack applications. I enjoy solving problems, creating
                clean UI/UX, and learning new technologies.
              </p>
              <div className="grid grid-cols-12 gap-4 ">
                <Card className="col-span-12 md:col-span-4 bg-card">
                  <CardHeader>
                    <CardTitle>
                      <Code className="w-5 h-5 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-foreground">
                      Programming Languages
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-card-foreground">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="col-span-12 md:col-span-4 bg-card">
                  <CardHeader>
                    <CardTitle>
                      {" "}
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-foreground">
                      Education
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-card-foreground">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>Bachelor of Information Systems, 3.41/4.00</li>
                      <li>
                        Thesis Topic: Building a web-based Application For MSMEs
                        (UMKM) with MERN stack
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="col-span-12 md:col-span-4 bg-card">
                  <CardHeader>
                    <CardTitle>
                      <Languages className="w-5 h-5 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-foreground">
                      Natural (Human) Language
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-card-foreground">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>Indonesian (Native Tongue)</li>
                      <li>English (TOEFL ITP Score : 607)</li>
                      <li>Japanese (N4-Level)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div>
                <p>Familiar Technologies:</p>

                <div className="flex gap-2 flex-wrap">
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
          </div>
        </section>
      );
  }
}
