"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (section: string) => {
    console.log("Go to:", section);
    // You can use router.push(`/path`) if you want page navigation
    // or scrollIntoView if it’s single-page
  };

  return (
    <nav className="sticky top-0 z-50  w-full bg-background text-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold">portfolio-aql</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Button onClick={() => handleClick("home")} variant={"ghost"}>
              Home
            </Button>
            <Button onClick={() => handleClick("projects")} variant={"ghost"}>
              About Me
            </Button>
            <Button onClick={() => handleClick("about")} variant={"ghost"}>
              Experience
            </Button>
            <Button onClick={() => handleClick("contact")} variant={"ghost"}>
              Contact
            </Button>

            {/* Theme switcher */}
            {/* <ThemeSwitcher /> */}
          </div>
          <div className="hidden md:flex justify-between gap-4">
            <ThemeSwitcher />
            <Button onClick={() => handleClick("contact")} variant={"default"}>
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            {/* <ThemeSwitcher /> */}
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
        <div className="md:hidden px-2 pt-2 pb-4 flex flex-col gap-2 bg-background text-foreground">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
