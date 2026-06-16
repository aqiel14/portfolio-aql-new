"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { navItems } from "@/data";

export default function Win98Footer() {
  const { theme } = useTheme();

  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  if (theme !== "windows98") return null;

  return (
    <>
      {/* Start Menu */}
      {open && (
        <div
          ref={menuRef}
          className="
            fixed
            bottom-10
            left-0
            z-[60]

            w-64

            bg-[#c0c0c0]

            border-t-2
            border-l-2

            border-r-2
            border-b-2

            border-t-white
            border-l-white

            border-r-[#808080]
            border-b-[#808080]

            shadow-lg
          "
        >
          <div className="flex">
            {/* Blue strip */}
            <div
              className="
                w-8

                bg-gradient-to-b
                from-[#000080]
                to-[#1084D0]

                text-white

                flex
                items-end
                justify-center
              "
            ></div>

            {/* Menu Items */}
            <div className="flex-1 py-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavigate(item.section)}
                  className="
                    w-full

                    px-3
                    py-2

                    text-left
                    text-black
                    text-sm

                    hover:bg-[#000080]
                    hover:text-white
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <footer
        className="
          fixed
          bottom-0
          left-0
          right-0

          z-50

          h-10

          bg-[#c0c0c0]

          border-t-2
          border-t-white

          px-1

          flex
          items-center
          justify-between
        "
      >
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className={`
            h-8
            px-3

            bg-[#c0c0c0]

            border-t-2
            border-l-2
            border-r-2
            border-b-2

            ${
              open
                ? `
              border-t-[#808080]
              border-l-[#808080]
              border-r-white
              border-b-white
            `
                : `
              border-t-white
              border-l-white
              border-r-[#808080]
              border-b-[#808080]
            `
            }

            text-black
            text-sm
            font-bold

            flex
            items-center
            gap-2
          `}
          >
            🪟 Start
          </button>

          <p className="text-xs text-muted-foreground">
            Made with ❤️ by yours truly{" "}
          </p>
        </div>

        <div
          className="
            h-8
            px-3

            border-t
            border-l

            border-t-[#808080]
            border-l-[#808080]

            border-r-white
            border-b-white

            flex
            items-center

            text-xs
            text-black
          "
        >
          {time}
        </div>
      </footer>
    </>
  );
}
