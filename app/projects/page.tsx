"use client";

import { useId } from "react";

export default function Projects() {
  const uniqueId = useId();
  const projects = [
    {
      title: "프로젝트 1",
      description: "첫 번째 프로젝트에 대한 설명입니다.",
      tech: ["React", "TypeScript", "Next.js"],
      link: "#",
    },
    {
      title: "프로젝트 2",
      description: "두 번째 프로젝트에 대한 설명입니다.",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12"></div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={`${uniqueId}-project-${index}-${project.title}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          ></div>
        ))}
      </div>
    </div>
  );
}
