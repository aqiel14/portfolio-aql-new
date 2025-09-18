import { Experience } from "@/types/types";
import React from "react";

type ExperienceVariantProps = {
  experiences: Experience[];
};

const ExperienceDiscord = ({ experiences }: ExperienceVariantProps) => {
  const reactions = ["👍", "❤️", "🔥", "💯"];

  const getRandomCount = () => Math.floor(Math.random() * 20) + 1; // random 1-20

  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

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

              {/* Reactions */}
              <div className="flex gap-2 mt-3">
                {reactions.map((reaction, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-[#36393f] px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-[#4f545c]"
                  >
                    <span>{reaction}</span>
                    <span>{getRandomCount()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceDiscord;
