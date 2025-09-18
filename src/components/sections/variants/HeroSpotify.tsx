import { Button } from "@/components/ui/button";
import { FileDown, SkipBack } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSpotify = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-6 md:px-20"
    >
      {/* Artist image */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg mb-6">
        <Image
          src="/me.png" // replace with your avatar
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>

      {/* "Artist" name */}
      <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
        Aqiel Ilhamy
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-muted-foreground mb-6">
        Full-stack Developer · 3 years of experience
      </p>

      {/* "Follow" button */}
      <div className=" flex flex-col  sm:flex-row gap-4">
        <Button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          size="lg"
          className="px-6 py-3"
        >
          <SkipBack className="w-6 h-6" />
          Contact Me
        </Button>
        <a
          href="Mohammad Aqiel Ilhamy - Software Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" variant="outline" className="px-6 py-3">
            <FileDown className="h-6 w-6" />
            My Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSpotify;
