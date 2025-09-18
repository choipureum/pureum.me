"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import GlassSurface from "@/app/(components)/animations/GlassSurface";
import ClickSpark from "@/app/(components)/animations/ClickSpark";

const items = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Posts", href: "/posts" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = items.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname]);

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 w-[80vw] max-w-[1200px] h-16 z-999">
      <GlassSurface width="100%" height={68} borderRadius={24}>
        <ClickSpark
          sparkColor="#FFF"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          extraScale={0.8}
          duration={400}
        >
          <div className="flex items-center justify-between w-full h-full px-6 pointer-events-auto">
            <Image src="/icon.png" alt="logo" width={32} height={32} />

            <div className="relative flex items-center space-x-2">
              {items.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`cursor-pointer relative z-20 flex items-center justify-center h-12 px-6 rounded-[20px] transition-all duration-300 pointer-events-auto ${
                    activeIndex === index ? "gradient-text" : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </ClickSpark>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
