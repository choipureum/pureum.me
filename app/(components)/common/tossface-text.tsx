import React from "react";
import { cn } from "@/lib/utils";

interface TossfaceTextProps {
  children: React.ReactNode;
  className?: string;
}

export const TossfaceText = ({ children, className }: TossfaceTextProps) => {
  return <span className={cn("tossface", className)}>{children}</span>;
};
