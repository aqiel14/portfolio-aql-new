import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
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
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
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
};

export default Footer;
