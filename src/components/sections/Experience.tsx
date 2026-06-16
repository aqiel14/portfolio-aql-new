"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/providers/ThemeProvider";
import { Briefcase } from "lucide-react";
import ExperienceDiscord from "./discord/ExperienceDiscord";
import ThemedCardHeader from "../ThemedCardHeader";

const Experience = () => {
  const experiences = [
    {
      company: "CODE.ID",
      location: "Jakarta, Indonesia",
      period: "Mar 2026 - Present",
      role: "Frontend Developer",
      details: [
        "Developed and maintained the HVC (High Value Customer) Mini App within the MyTelkomsel ecosystem, implementing responsive user interfaces from Figma designs using React, TaroJS, Tailwind CSS, TypeScript, and Zustand.",
        "Integrated backend APIs and implemented business requirements to support features and data presentation within the mini app.",
        "Worked closely with QA engineers during testing and bug-fixing phases to ensure feature quality and resolve issues before release",
      ],
    },
    {
      company: "SMPxIT",
      location: "Remote",
      period: "Nov 2025 - Jan 2026",
      role: "Frontend Developer (Freelance)",
      details: [
        "Developed and maintained the company’s main business website",
        "Built the company's job portal and blog platform and their respective CMS with Next.js",
        "Implemented responsive and reusable UI components using Tailwind shadcn/ui",
        "Collaborated with the team through Git and delivering features in an agile environment",
      ],
    },

    {
      company: "Platon",
      location: "Jakarta, Indonesia",
      period: "Nov 2023 - Nov 2024",
      role: "Full Stack Developer",
      details: [
        "Developed full stack web applications for various clients using Next.js, React, PostgreSQL, Prisma, and Tanstack Query",
        "Built responsive front-end interfaces and integrated them with backend APIs",
        "Collaborated with designers to deliver production-ready features",
        "Contributed across the full development lifecycle, in a solo and team environment from planning and development to deployment",
      ],
    },
    {
      company: "Commsult Indonesia",
      location: "Tangerang Selatan, Indonesia",
      period: "Jan 2022 - Nov 2023",
      role: "Software Developer",
      details: [
        "Was assigned to the project Akomate,  an all-in-one hotel management system with 21+ features including Accounting, Booking, and Auditing, built using the MERN stack (MongoDB, Express, React, Node.js) with Redux for state management and Material UI for the interface.",
        "Contributed to the project Ontego Traces  (traces.ontego.de), a fully integrated software solution for planning, tracking, and optimizing beverage delivery routes with automated delivery time notifications for end customers, using React for the frontend.",
        "Rewrote backend API endpoints for Ontego Traces from Spring Boot to an entirely new Typescript+Node+Express app",
      ],
    },
    {
      company: "Telkom University – Faculty of Industry Engineering",
      location: "Bandung, Indonesia",
      period: "Jun 2020 - Aug 2020",
      role: "Frontend Developer Intern",
      details: [
        "Built the frontend for Thesis Selection App during the COVID-19 pandemic.",
        "Designed use cases and UML diagrams for system analysis.",
      ],
    },
  ];

  const { theme } = useTheme();

  switch (theme) {
    case "discord":
      return <ExperienceDiscord experiences={experiences} />;
    // case "spotify":
    //   return <ExperienceSpotify experiences={experiences} />;
    default:
      return (
        <section id="experience" className="py-16 px-4 lg:min-h-screen">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line only on large screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-muted-foreground/20" />

            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`relative flex lg:items-center ${
                    idx % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Dot only on large screens */}
                  <span className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background" />

                  <div
                    className={`w-full lg:max-w-md ${
                      idx % 2 === 0 ? "lg:pr-8 " : "lg:pl-8 "
                    }`}
                  >
                    <Card className="bg-card">
                      <ThemedCardHeader
                        title={`${exp.company} – ${exp.location}`}
                        icon={Briefcase}
                      />
                      <CardContent>
                        <div className="flex gap-2 font-semibold">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.role}
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {exp.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
};

export default Experience;
