"use client";

import LogoLoop from "@/app/(components)/animations/LogoLoop";
import { motion } from "motion/react";
import {
  SiBiome,
  SiDocker,
  SiFramer,
  SiGithub,
  SiJenkins,
  SiKubernetes,
  SiNextdotjs,
  SiPnpm,
  SiReact,
  SiReactquery,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

export default function TechStack() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiReactquery />,
      title: "React Query",
      href: "https://tanstack.com/query",
    },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiFramer />, title: "Framer Motion", href: "https://motion.dev" },
    { node: <SiBiome />, title: "Biome", href: "https://biomejs.dev" },
    { node: <SiPnpm />, title: "pnpm", href: "https://pnpm.io" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
    {
      node: <SiKubernetes />,
      title: "Kubernetes",
      href: "https://kubernetes.io",
    },
    { node: <SiJenkins />, title: "Jenkins", href: "https://jenkins.io" },
  ];

  return (
    <motion.div
      className="mt-32 mb-20 w-full"
      data-section="tech-stack"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="relative overflow-hidden w-full"
        style={{ height: "120px" }}
        initial={{
          opacity: 0,
          y: 30,
          rotateX: -15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true }}
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel="기술 스택"
        />
      </motion.div>
    </motion.div>
  );
}
