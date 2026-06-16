"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";
import { LucideIcon, X } from "lucide-react";

type WindowControl = "minimize" | "maximize" | "close";

interface ThemedCardHeaderProps {
  title: string;
  icon?: LucideIcon;
  alignHeader?: "left" | "center" | "right";
  controls?: WindowControl[];
}

interface Win98WindowControlsProps {
  controls: WindowControl[];
}

const Win98ControlButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        h-4
        w-4

        bg-[#c0c0c0]

        border-t
        border-l
        border-r
        border-b

        border-t-white
        border-l-white
        border-r-[#808080]
        border-b-[#808080]

        flex
        items-center
        justify-center

        text-black
        text-[16px]
        leading-none
        font-bold
      "
    >
      {children}
    </div>
  );
};

const Win98WindowControls = ({ controls }: Win98WindowControlsProps) => {
  return (
    <div className="flex gap-1">
      {controls.includes("minimize") && (
        <Win98ControlButton>_</Win98ControlButton>
      )}

      {controls.includes("maximize") && (
        <Win98ControlButton>□</Win98ControlButton>
      )}

      {controls.includes("close") && (
        <Win98ControlButton>
          <X />
        </Win98ControlButton>
      )}
    </div>
  );
};

export default function ThemedCardHeader({
  title,
  icon: Icon,
  alignHeader = "left",
  controls = ["close"],
}: ThemedCardHeaderProps) {
  const { theme } = useTheme();

  if (theme === "windows98") {
    return (
      <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Icon && <Icon className="h-3 w-3 text-white" />}
            <span className="text-xs">{title}</span>
          </div>

          <Win98WindowControls controls={controls} />
        </div>
      </div>
    );
  }

  return (
    <CardHeader
      className={cn(
        alignHeader === "center" && "items-center text-center",
        alignHeader === "right" && "items-end text-right",
      )}
    >
      {Icon && (
        <CardTitle>
          <Icon className="h-5 w-5 text-primary" />
        </CardTitle>
      )}

      <CardDescription className="text-foreground font-semibold">
        {title}
      </CardDescription>
    </CardHeader>
  );
}
