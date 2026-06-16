"use client";

import ThemedCardHeader from "@/components/ThemedCardHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { contentAbout } from "@/data";
import { Briefcase } from "lucide-react";
import Image from "next/image";

const AboutWindows98 = () => {
  return (
    <section id="about" className="px-4 md:px-20 py-20 md:py-32 ">
      <Card className="bg-card max-w-5xl mx-auto">
        <ThemedCardHeader
          title={`About Me`}
          icon={Briefcase}
          controls={["close", "maximize", "minimize"]}
        />
        <CardContent>
          <div className="grid grid-cols-12 max-w-5xl mx-auto gap-4 md:gap-12 items-center">
            {/* Portrait */}
            <div className="flex col-span-12 md:col-span-4 justify-center">
              <Image
                src="/me.png" // replace with your own portrait
                alt="Your portrait"
                width={320}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-48 h-72 md:w-80 md:h-[400px] border-4 border-primary shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                I’m a passionate software engineer with experience in building
                full-stack applications. I enjoy solving problems, creating
                clean UI/UX, and learning new technologies.
              </p>
              <div className="grid grid-cols-12 gap-4">
                {contentAbout.map((card) => {
                  const Icon = card.icon;

                  return (
                    <Card
                      key={card.title}
                      className="col-span-12 md:col-span-4 bg-card"
                    >
                      <ThemedCardHeader title={card.title} icon={Icon} />

                      <CardContent className="text-card-foreground">
                        <ul className="list-disc list-inside space-y-2">
                          {card.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
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
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutWindows98;
