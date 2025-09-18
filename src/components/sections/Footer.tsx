"use client";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/providers/ThemeProvider";
import { Github, Linkedin, Mail } from "lucide-react";
import FooterSpotify from "./variants/FooterSpotify";

const Footer = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "spotify":
      return <FooterSpotify />;
    default:
      return (
        <footer className="w-full border-t bg-background">
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aqiel Ilhamy. All rights reserved.
            </div>

            {/* Divider for mobile */}
            <Separator className="md:hidden" />

            {/* Right side: socials */}
            <div className="flex gap-6">
              <a
                href="mailto:aqiel_ilhamy@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/aqiel14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/aqiel-ilhamy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      );
  }
};

export default Footer;
