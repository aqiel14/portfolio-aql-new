"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { navItems } from "@/data";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        bg-navbar
        text-foreground
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-lg md:text-2xl font-bold text-nowrap text-card-foreground">
            portfolio-aql
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Button
                key={item.section}
                onClick={() => handleClick(item.section)}
                variant="ghost"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex justify-between gap-4">
            <ThemeSwitcher />

            <Button onClick={() => handleClick("contact")} variant="default">
              Contact
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />

            <button
              onClick={() => setOpen(!open)}
              className="ml-2 p-2 rounded-md hover:bg-muted"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            px-2
            pt-2
            pb-4
            flex
            flex-col
            gap-2
            bg-background
            text-foreground
          "
        >
          {navItems.map((item) => (
            <div
              key={item.section}
              onClick={() => handleClick(item.section)}
              className="cursor-pointer hover:underline"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
