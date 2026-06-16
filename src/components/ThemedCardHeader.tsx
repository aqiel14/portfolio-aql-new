"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";
import { LucideIcon, X } from "lucide-react";
import { ReactNode } from "react";

interface ThemedCardHeaderProps {
  title: string;
  icon?: LucideIcon;
  alignHeader?: "left" | "center" | "right";
}

export default function ThemedCardHeader({
  title,
  icon: Icon,
  alignHeader = "left",
}: ThemedCardHeaderProps) {
  const { theme } = useTheme();

  if (theme === "windows98") {
    return (
      <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 text-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 items-center">
            {Icon && <Icon className="h-2 w-2 text-white" />}
            <span className="text-xs">{title}</span>
          </div>
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
      "
          >
            <X className="h-3 w-3 text-black stroke-[3]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <CardHeader
      className={cn(
        alignHeader === "center" && "text-center items-center",
        alignHeader === "right" && "text-right items-end",
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
