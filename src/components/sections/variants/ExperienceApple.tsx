import { Experience } from "@/types/types";
import React from "react";

type ExperienceAppleProps = {
  experiences: Experience[];
};

const ExperienceApple = ({ experiences }: ExperienceAppleProps) => {
  return (
    <section className="bg-white text-black">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="min-h-screen flex flex-col justify-center items-center px-6 text-center border-b border-gray-200"
        >
          <h3 className="text-5xl font-bold mb-4">{exp.role}</h3>
          <p className="text-xl text-gray-600 mb-1">
            {exp.company} · {exp.location}
          </p>
          <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
          <p className="text-md text-gray-500 italic mb-6">{exp.type}</p>
          <ul className="list-disc list-inside text-left max-w-2xl space-y-2 text-lg">
            {exp.details.map((detail, j) => (
              <li key={j}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceApple;
