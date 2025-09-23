"use client";

import GlassSurface from "@/app/(components)/animations/GlassSurface";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", href: "/#home", scroll: true },
  { label: "About", href: "/#about", scroll: true },
  { label: "Projects", href: "/#projects", scroll: true },
  { label: "Posts", href: "/posts", scroll: false },
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

  const handleNavClick = (item: (typeof items)[0], index: number) => {
    setActiveIndex(index);

    if (item.scroll) {
      if (pathname !== "/") {
        window.location.href = item.href;
        return;
      }

      const sectionId = item.href.replace("/#", "");
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 w-[95vw] sm:w-[80vw] max-w-[1200px] h-16 z-999">
      <GlassSurface
        width="100%"
        height={68}
        borderRadius={24}
        displace={3}
        opacity={1}
        blur={20}
      >
        <div className="flex items-center justify-between w-full h-full px-2 sm:px-6 pointer-events-auto">
          <Image
            src="/icon.png"
            alt="logo"
            width={28}
            height={28}
            className="sm:w-8 sm:h-8"
            priority={true}
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />

          <div className="relative flex items-center space-x-1 sm:space-x-2">
            {items.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`cursor-pointer relative z-20 flex items-center justify-center h-10 sm:h-12 px-2 sm:px-6 rounded-[16px] sm:rounded-[20px] transition-all duration-300 pointer-events-auto text-xs sm:text-base ${
                  activeIndex === index
                    ? "gradient-text"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={(e) => {
                  if (item.scroll) {
                    e.preventDefault();
                    handleNavClick(item, index);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
