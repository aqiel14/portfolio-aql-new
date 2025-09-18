"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const themes = [
  { value: "notion", label: "Notion" },
  { value: "discord", label: "Discord" },
  { value: "spotify", label: "Spotify" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [glow, setGlow] = useState(false);

  // show glow after 10s (no tooltip)
  useEffect(() => {
    const t = setTimeout(() => setGlow(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (val: any) => {
    setTheme(val);
    setGlow(false); // stop glow after first interaction
  };

  return (
    <motion.div
      animate={
        glow
          ? {
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 14px rgba(34,197,94,0.9)", // green-ish glow; change color if you want
                "0 0 0px rgba(0,0,0,0)",
              ],
            }
          : {}
      }
      transition={{ duration: 1.2, repeat: glow ? Infinity : 0 }}
      className="rounded-lg"
    >
      <Select value={theme} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
}
