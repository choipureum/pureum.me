"use client";

import ScrollFloat from "@/app/(components)/animations/ScrollFloat";
import Career from "@/app/(components)/features/career";
import { FlipWords } from "@/app/(components)/animations/FlipWords";

export default function About() {
  const words = ["Career ☘️", "Journey ⛳️"];

  return (
    <div id="about" data-section="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-400 dark:text-neutral-400">
            About of My
            <FlipWords words={words} />
          </div>
        </div>
      </div>
      <Career />
    </div>
  );
}
