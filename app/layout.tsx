import type { Metadata } from "next";
import "./globals.css";
import Prism from "@/app/(components)/animations/Prism";
import Navbar from "@/app/(components)/layout/navbar";
import { pretendard } from "./fonts/pretendard";
import GradualBlur from "@/app/(components)/animations/GradualBulr";
import ClickSpark from "@/app/(components)/animations/ClickSpark";

export const metadata: Metadata = {
  title: "Pureum.me",
  description: "Personal website of Pureum Choi",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link
        href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css"
        rel="stylesheet"
        type="text/css"
      />
      <body className={`bg-primary ${pretendard.className}`}>
        <ClickSpark
          sparkColor="#FFF"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          extraScale={0.8}
          duration={400}
        >
          <main className="min-h-screen relative bg-primary">
            <div
              className="fixed inset-0 w-full h-full"
              style={{ filter: "brightness(0.6)" }}
            >
              <Prism
                animationType="rotate"
                timeScale={0.5}
                height={2}
                baseWidth={4}
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                noise={0}
                glow={1}
              />
            </div>

            <Navbar />

            <div className="relative z-10">
              {children}
              <GradualBlur
                target="page"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
              />
            </div>
          </main>
        </ClickSpark>
      </body>
    </html>
  );
}
