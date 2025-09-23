import React from "react";
import { TossfaceText } from "./tossface-text";
import { FlipWords } from "@/app/(components)/animations/FlipWords";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconText?: string;
  useFlipWords?: boolean;
  flipWords?: string[];
}

export const ExternalLink = ({
  href,
  children,
  className,
  showIcon = true,
  iconText = "🔗",
  useFlipWords = false,
  flipWords = ["move", "url"],
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center", className)}
    >
      {showIcon && <TossfaceText>{iconText}</TossfaceText>}
      {useFlipWords ? (
        <FlipWords
          words={flipWords}
          className="text-sm text-blue-300 hover:text-blue-500 transition-colors"
        />
      ) : (
        children
      )}
    </a>
  );
};
