"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "@/app/(components)/common/external-link";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiJavascript,
  SiCss3,
  SiWebpack,
  SiSass,
  SiJquery,
  SiHtml5,
  SiPhp,
  SiMysql,
  SiCoder,
  SiOpenai,
  SiRedux,
  SiMui,
  SiDocker,
  SiKubernetes,
  SiVuedotjs,
  SiCanvas,
  SiNpm,
  SiSharp,
  SiDotnet,
  SiCommitlint,
  SiJenkins,
  SiBiome,
  SiPnpm,
  SiVitepress,
} from "react-icons/si";

interface CompanyInfoProps {
  company: string;
  logo: string;
  position: string;
  team: string;
  description?: string;
  techStack?: string[];
  url?: string;
}

const getTechIcon = (techName: string) => {
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    React: SiReact,
    TypeScript: SiTypescript,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    Motion: SiFramer,
    Vite: SiVite,
    JavaScript: SiJavascript,
    CSS3: SiCss3,
    Webpack: SiWebpack,
    Sass: SiSass,
    jQuery: SiJquery,
    HTML5: SiHtml5,
    PHP: SiPhp,
    MySQL: SiMysql,
    MCP: SiOpenai,
    "RTK Query": SiRedux,
    MUI: SiMui,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    GSAP: SiCoder,
    Vue: SiVuedotjs,
    Canvas: SiCanvas,
    NPM: SiNpm,
    "C#": SiSharp,
    ".NET": SiDotnet,
    "SQL Server": SiMysql,
    Commitlint: SiCommitlint,
    Jenkins: SiJenkins,
    Biome: SiBiome,
    Pnpm: SiPnpm,
    VitePress: SiVitepress,
  };

  return iconMap[techName] || SiCoder;
};

const getTechColor = (techName: string) => {
  const colorMap: { [key: string]: string } = {
    React: "bg-blue-900 text-blue-200",
    TypeScript: "bg-blue-900 text-blue-200",
    "Next.js": "bg-gray-800 text-gray-200",
    "Tailwind CSS": "bg-cyan-900 text-cyan-200",
    Motion: "bg-purple-900 text-purple-200",
    Vite: "bg-yellow-900 text-yellow-200",
    JavaScript: "bg-yellow-900 text-yellow-200",
    CSS3: "bg-blue-900 text-blue-200",
    Webpack: "bg-blue-900 text-blue-200",
    Sass: "bg-pink-900 text-pink-200",
    jQuery: "bg-blue-900 text-blue-200",
    HTML5: "bg-orange-900 text-orange-200",
    PHP: "bg-purple-900 text-purple-200",
    MySQL: "bg-orange-900 text-orange-200",
    MCP: "bg-green-900 text-green-200",
    "RTK Query": "bg-purple-900 text-purple-200",
    MUI: "bg-blue-900 text-blue-200",
    Docker: "bg-blue-900 text-blue-200",
    Kubernetes: "bg-blue-900 text-blue-200",
    GSAP: "bg-green-900 text-green-200",
    Vue: "bg-green-900 text-green-200",
    Canvas: "bg-gray-800 text-gray-200",
    NPM: "bg-red-900 text-red-200",
    "C#": "bg-purple-900 text-purple-200",
    ".NET": "bg-purple-900 text-purple-200",
    "SQL Server": "bg-blue-900 text-blue-200",
    Husky: "bg-gray-800 text-gray-200",
    Commitlint: "bg-blue-900 text-blue-200",
    Jenkins: "bg-red-900 text-red-200",
    Biome: "bg-purple-900 text-purple-200",
    Pnpm: "bg-orange-900 text-orange-200",
    VitePress: "bg-green-900 text-green-200",
  };

  return colorMap[techName] || "bg-neutral-700 text-neutral-300";
};

export const CompanyInfo = ({
  company,
  logo,
  position,
  team,
  description = "",
  techStack = [],
  url,
}: CompanyInfoProps) => {
  return (
    <div className="mb-4 pb-6 rounded-lg">
      <div className="flex items-center gap-4 mb-3">
        <Image
          src={logo}
          alt={`${company} 로고`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-lg object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-bold text-neutral-200">{company}</h4>
            {url && (
              <ExternalLink
                href={url}
                useFlipWords={true}
                flipWords={["move", "url"]}
              />
            )}
          </div>
          <p className="text-sm text-neutral-300">
            {position} · {team}
          </p>
        </div>
      </div>
      <p className="text-sm text-neutral-300 mb-3">{description}</p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => {
            const IconComponent = getTechIcon(tech);
            const colorClasses = getTechColor(tech);
            if (!IconComponent) return null;

            return (
              <div
                key={index}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${colorClasses}`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
