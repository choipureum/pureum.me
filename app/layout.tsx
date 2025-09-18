import type { Metadata } from "next";
import "./globals.css";
import Prism from "@/app/(components)/animations/Prism";
import Navbar from "@/app/(components)/layout/navbar";
import { pretendard } from "./fonts/pretendard";

export const metadata: Metadata = {
  title: "Pureum.me",
  description: "Personal website of Pureum Choi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`bg-primary ${pretendard.className}`}>
        <main className="min-h-screen relative bg-primary">
          <div className="fixed inset-0 w-full h-full" style={{ filter: "brightness(0.6)" }}>
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
          <div className="relative z-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
