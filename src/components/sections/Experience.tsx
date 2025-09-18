"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/providers/ThemeProvider";
import { Briefcase } from "lucide-react";
import ExperienceApple from "./variants/ExperienceApple";
import ExperienceDiscord from "./variants/ExperienceDiscord";

const Experience = () => {
  const experiences = [
    {
      company: "Platon",
      location: "Jakarta, Indonesia",
      period: "Nov 2023 - Nov 2024",
      role: "Full Stack Developer",
      details: [
        "Worked on various projects with various clients using Next.js, PostgreSQL, React Query, and Prisma.",
      ],
    },
    {
      company: "Commsult Indonesia",
      location: "Tangerang Selatan, Indonesia",
      period: "Jan 2022 - Nov 2023",
      role: "Software Developer",
      details: [
        "Was assigned to the project Akomate, an all-in-one Hotel management system with 21+ features (Accounting, Booking, Auditing, etc.).",
        "Contributed to the project Ontego Traces (SAP Business Suite module) for logistics and delivery optimization.",
        "Rewrote Ontego Traces backend APIs from Spring Boot to an entirely new Node.js + Express + TypeScript app.",
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
    //   return <ExperienceSpotify experiences={experiences} />
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
                      idx % 2 === 0
                        ? "lg:pr-8 lg:text-right"
                        : "lg:pl-8 lg:text-left"
                    }`}
                  >
                    <Card className="bg-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.role}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} – {exp.location}
                        </p>
                        <p className="text-sm">{exp.period}</p>
                      </CardHeader>
                      <CardContent>
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
