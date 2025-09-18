"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "The Big Day",
    url: "https://thebigday.id",
    image: "/thebigday.png", // replace with actual screenshot path
    description:
      "A personal side-business platform offering client-based digital wedding invitations. Personally designed and developed various invitation themes — from traditional to modern — using React, Next.js, and Tailwind CSS.",
    tech: ["React", "Next.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Featured Project(s)
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden border shadow-sm">
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-center">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button asChild variant="link" className="px-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
