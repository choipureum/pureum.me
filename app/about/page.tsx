"use client";

import GlassSurface from "@/app/(components)/animations/GlassSurface";
import ScrollFloat from "@/app/(components)/animations/ScrollFloat";
import { calculateDuration, formatDate } from "@/lib/utils";
import { motion } from "motion/react";
import { useId } from "react";

export default function About() {
  const uniqueId = useId();

  const experiences = [
    {
      company: "NCSOFT",
      logo: "/ncsoft.jpeg",
      position: "Frontend Developer",
      teams: [
        {
          name: "인사이트플랫폼개발팀",
          startDate: new Date("2024-07-01"),
          endDate: null, // 현재 재직 중
        },
        {
          name: "마케팅 서비스팀",
          startDate: new Date("2022-06-01"),
          endDate: new Date("2024-07-01"),
        },
      ],
      startDate: new Date("2022-06-01"),
      endDate: null, // 현재 재직 중
    },
    {
      company: "iMBC",
      logo: "/imbc.jpeg",
      position: "Web Developer",
      teams: [
        {
          name: "시스템 개발팀",
          startDate: new Date("2020-11-01"),
          endDate: new Date("2022-06-01"),
        },
      ],
      startDate: new Date("2020-11-01"),
      endDate: new Date("2022-06-01"),
    },
  ];

  return (
    <div id="career" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <ScrollFloat
          animationDuration={0.6}
          ease="power2.out"
          scrollStart="top bottom-=200px"
          scrollEnd="center center"
          stagger={0.05}
          textClassName="text-4xl font-bold text-white mb-4"
        >
          Career
        </ScrollFloat>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${uniqueId}-experience-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              displace={5}
              opacity={0.9}
              blur={25}
              className="p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} 로고`}
                    className="w-12 h-12 mr-4 rounded-lg object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.position}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="space-y-2">
                  {exp.teams.map((team, teamIndex) => (
                    <div
                      key={`${uniqueId}-team-${index}-${teamIndex}`}
                      className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <p className="text-sm text-gray-300">{team.name}</p>
                      <p className="text-xs text-gray-400 mt-1 md:mt-0">
                        {formatDate(team.startDate)} -{" "}
                        {team.endDate ? formatDate(team.endDate) : "현재"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 ">
                <div className="text-gray-300">
                  <p className="text-sm">
                    {formatDate(exp.startDate)} -{" "}
                    {exp.endDate ? formatDate(exp.endDate) : "현재"}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm font-medium text-white">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </p>
                </div>
              </div>
            </GlassSurface>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
