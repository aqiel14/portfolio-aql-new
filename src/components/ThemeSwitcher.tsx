"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const themes = [
  { value: "notion", label: "Notion" },
  { value: "discord", label: "Discord" },
  { value: "spotify", label: "Spotify" },
  // { value: "dev", label: "Dev" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  console.log("theme", theme);

  return (
    <Select value={theme} onValueChange={(val: any) => setTheme(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.value} value={theme.value}>
            {theme.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
