import Image from "next/image";

import { Code, GraduationCap, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSpotify = () => {
  const gradients = [
    "bg-gradient-to-r from-[#1DB954] via-[#15803D] to-[#065F46]", // Spotify green shades
    "bg-gradient-to-r from-[#9333EA] via-[#7E22CE] to-[#4C1D95]", // Deep purple
    "bg-gradient-to-r from-[#E11D48] via-[#BE123C] to-[#9F1239]", // Crimson red
    "bg-gradient-to-r from-[#06B6D4] via-[#0891B2] to-[#155E75]", // Teal/cyan
    "bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309]", // Warm amber/orange
    "bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#BE185D]", // Hot pink/magenta
    "bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1E40AF]", // Electric blue
  ];
  return (
    <section className="min-h-screen relative overflow-hidden px-6 py-20 text-white bg-gradient-to-br from-[#1DB954] via-purple-600 to-pink-500 rounded-2xl">
      {/* funky bg blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-800 rounded-full blur-3xl opacity-40" />

      <h2 className="text-5xl font-extrabold text-center mb-16 relative z-10">
        Wrapped: About Me
      </h2>

      <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto items-center relative z-10">
        {/* Portrait */}
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <Image
            src="/me.png"
            alt="Your portrait"
            width={320}
            height={400}
            className="rounded-2xl shadow-2xl border-4 border-white/20 object-cover"
          />
        </div>

        {/* Info */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          <p className="text-lg leading-relaxed font-medium">
            Passionate software engineer, solving problems, building full-stack
            apps, and crafting clean UI/UX.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Programming */}
            <Card className="bg-black/40 backdrop-blur-xl border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="w-6 h-6 text-[#1DB954]" />
                  Top Skills
                </CardTitle>
                <CardDescription className="text-white/70">
                  Your top coding tracks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-semibold">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-black/40 backdrop-blur-xl border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="w-6 h-6 text-[#1DB954]" />
                  Education
                </CardTitle>
                <CardDescription className="text-white/70">
                  Academic playlist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-semibold">
                  <li>Bachelor of Info Systems (GPA 3.41)</li>
                  <li>Thesis: MERN App for MSMEs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-black/40 backdrop-blur-xl border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Languages className="w-6 h-6 text-[#1DB954]" />
                  Languages
                </CardTitle>
                <CardDescription className="text-white/70">
                  Your spoken tracks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-semibold">
                  <li>Indonesian (Native)</li>
                  <li>English (TOEFL ITP 607)</li>
                  <li>Japanese (N4)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tech stack badges */}
          <div>
            <p className="mb-3 text-lg font-bold">✨ Featured Tech:</p>
            <div className="flex gap-2 flex-wrap">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
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
              ].map((tech, i) => {
                const gradient =
                  gradients[Math.floor(Math.random() * gradients.length)];
                return (
                  <Badge
                    key={tech}
                    className={`${gradient} text-white border-none shadow-md px-3 py-1 rounded-full`}
                  >
                    {tech}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpotify;
