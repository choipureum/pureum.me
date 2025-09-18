"use client";

import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  highlightText?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
  highlightText,
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <motion.h1
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto max-w-4xl text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
      >
        {title.split(" ").map((word, index) => {
          const isHighlighted = highlightText && word.includes(highlightText);
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={`mr-2 inline-block ${
                isHighlighted ? "gradient-text" : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
}
