import { Code, GraduationCap, Languages } from "lucide-react";

export const navItems = [
  { label: "Home", section: "home" },
  { label: "About Me", section: "about" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

export const contentAbout = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Education",
    icon: GraduationCap,
    items: [
      "Bachelor of Information Systems",
      "Thesis Topic: Building a web-based Application For MSMEs (UMKM) with MERN stack",
    ],
  },
  {
    title: "Spoken Languages",
    icon: Languages,
    items: [
      "Indonesian (Native Tongue)",
      "English (TOEFL ITP Score : 607)",
      "Japanese (N4-Level)",
    ],
  },
];
