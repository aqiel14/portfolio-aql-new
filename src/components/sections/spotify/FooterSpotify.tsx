import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  CircleCheck,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";

export default function FooterSpotify() {
  return (
    <footer className="fixed bottom-0 left-3 md:left-0 w-[95%] md:w-full z-50  px-4 py-2 flex items-center justify-between mb-2 md:mb-0 rounded-xl md:rounded-none border-b md:border-none border-border bg-slate-700 md:bg-card">
      {/* Left: cover art + song info */}
      <div className="flex items-center gap-3">
        <Image
          src="/me.png" // replace with project logo or portrait
          alt="Cover"
          width={48}
          height={48}
          className="rounded"
        />
        <div>
          <p className="text-sm font-medium">portfolio-aql</p>
          <p className="text-xs text-muted-foreground">Now playing</p>
        </div>
      </div>

      {/* Center: controls */}
      <div className="w-[40%]">
        <div className="hidden md:flex items-center flex-col gap-2">
          <div className="flex items-center gap-4">
            <SkipBack className="w-4 h-4 cursor-pointer hover:text-primary" />
            <Play className="w-6 h-6 cursor-pointer hover:text-primary" />
            <SkipForward className="w-4 h-4 cursor-pointer hover:text-primary" />
          </div>
          <Progress className="text-white" value={33} />
        </div>
        <div className="flex justify-end md:hidden gap-4">
          <MonitorSmartphone className="w-7 h-7 text-primary cursor-pointer hover:text-primary" />
          <CircleCheck className="w-7 h-7 text-primary cursor-pointer hover:text-primary" />
          <Play
            fill="white"
            className="w-7 h-7 cursor-pointer hover:text-primary"
          />
        </div>
      </div>

      {/* Right: volume */}
      <div className="hidden md:flex items-center gap-2 w-32">
        <Volume2 className="w-4 h-4" />
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </footer>
  );
}
