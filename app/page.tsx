"use client";

import ScrollIndicator from "@/app/(components)/common/scroll-indicator";
import SectionTitle from "@/app/(components)/features/section-title";
import { getFormattedYearsOfExperience, scrollToHashSection } from "@/lib/utils";
import { useEffect } from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "@/app/(components)/layout/footer";
import TechStack from "@/app/(components)/features/tech-stack";

export default function Home() {
  const formattedYears = getFormattedYearsOfExperience();
  const subtitle = `
    안녕하세요! ${formattedYears} 프론트엔드 개발자 최푸름입니다. <br/> 사용자와 개발자의 보다 나은 경험을 만들어 나가기 위해 노력합니다.
    의무적으로 해야만 하는 일로써 접근하는 것이 아닌 프로젝트의 개발자, 사용자 경험 개선을 위해 끝없이 고민합니다.
  `;

  useEffect(() => {
    scrollToHashSection();
  }, []);

  return (
    <div className="relative">
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <SectionTitle
          title="Hello, I'm Pureum Choi. Frontend developer."
          subtitle={subtitle}
          highlightText="Frontend"
        />
        <ScrollIndicator />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="footer" className="min-h-80 justify-center relative">
        <Footer />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>
    </div>
  );
}
