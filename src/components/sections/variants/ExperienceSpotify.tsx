import { Experience } from "@/types/types";
import Image from "next/image";
import React from "react";

type ExperienceVariantProps = {
  experiences: Experience[];
};

const ExperienceSpotify = ({ experiences }: ExperienceVariantProps) => {
  return (
    <section id="experience" className="flex flex-col items-center py-10">
      <div className="flex justify-center gap-4">
        <div className=" overflow-hidden border-1 border-primary shadow-lg">
          <Image
            src="/me.png"
            alt="Your Name"
            width="256"
            height="256"
            className="h-36 w-36 object-cover"
          />
        </div>
        <div className="flex flex-col justify-end gap-4">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <p className="font-semibold">Aql</p>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
              {exp.company[0]}
            </div>

            {/* Chat bubble */}
            <div className="bg-[#2f3136] p-4 rounded-lg text-gray-100 w-full">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{exp.company}</span>
                <span className="text-xs text-gray-400">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-400">
                {exp.role} · {exp.location}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSpotify;
