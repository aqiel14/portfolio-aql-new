"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroNotion from "./variants/HeroNotion";
import { useTheme } from "@/providers/ThemeProvider";
import HeroSpotify from "./variants/HeroSpotify";

export default function Hero() {
  const { theme } = useTheme();

  switch (theme) {
    case "spotify":
      return <HeroSpotify />;
    default:
      return <HeroNotion />;
  }

  // return (
  //   <section className="min-h-0 md:min-h-screen relative px-6 py-20 md:py-32">
  //     <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
  //       {/* Avatar */}
  //       <div className="rounded-full overflow-hidden border-4 border-primary shadow-lg">
  //         <Image
  //           src="/me.png"
  //           alt="Your Name"
  //           width="256"
  //           height="256"
  //           className="h-48 w-48 object-cover"
  //         />
  //       </div>

  //       <div className="flex flex-col  gap-4">
  //         <h1 className=" text-4xl md:text-6xl font-bold tracking-tight text-foreground">
  //           Hello! I'm Aqiel Ilhamy
  //         </h1>
  //         <h2 className=" text-lg md:text-4xl text-foreground">
  //           front-end developer / full-stack developer based in Indonesia
  //         </h2>

  //         <h2 className=" text-lg md:text-4xl text-muted-foreground">
  //           A full-stack developer with 3 years of experience. I enjoy building
  //           sites & apps. With a strong focus on React & Next.js.
  //         </h2>

  //         {/* CTAs */}
  //         <div className=" flex flex-col justify-center  sm:flex-row gap-4">
  //           <Button size="lg" className="px-6 py-3">
  //             Contact Me
  //           </Button>
  //           <Button size="lg" variant="outline" className="px-6 py-3">
  //             My Resume
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
