import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroNotion = () => {
  return (
    <section className="flex justify-center min-h-0 px-12 md:px-32  w-full py-10 md:py-32">
      <div className=" max-w-unset xl:max-w-[70%] 2xl:max-w-[50%] grid grid-cols-12 items-center text-center">
        <div className="col-span-12 md:col-span-7 flex justify-center order-1 md:order-2">
          <div className="rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/me.png"
              alt="Your Name"
              width="256"
              height="256"
              className="h-48 w-48 object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 text-start flex flex-col gap-4 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Hello! I'm Aqiel Ilhamy
          </h1>
          <h2 className="text-lg md:text-4xl text-foreground">
            A front-end developer / full-stack developer based in Indonesia
          </h2>

          <h2 className="text-md md:text-lg text-muted-foreground">
            A full-stack developer with 3 years of experience. I enjoy building
            sites & apps. With a strong focus on React & Next.js.
          </h2>

          {/* CTAs */}
          <div className=" flex flex-col  sm:flex-row gap-4">
            <Button size="lg" className="px-6 py-3">
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-3">
              <FileDown className="h-6 w-6" />
              My Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNotion;
