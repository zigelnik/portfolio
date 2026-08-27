import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DepthProvider } from "@/components/ocean/DepthProvider";
import { DepthBackground } from "@/components/ocean/DepthBackground";
import { ZoneBackground } from "@/components/ocean/ZoneBackground";
import { BubbleCanvas } from "@/components/ocean/BubbleCanvas";
import { DepthGaugeHUD } from "@/components/ocean/DepthGaugeHUD";
import { ReturnHomeButton } from "@/components/ocean/ReturnHomeButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tal Zigelnik | Software & Systems Engineer",
  description:
    "Portfolio of Tal Zigelnik: diving deep into complex systems across backend architecture, cloud deployments, API integrations, and AI workflows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <DepthProvider>
          <DepthBackground />
          <BubbleCanvas />
          <ZoneBackground />
          <DepthGaugeHUD />
          <ReturnHomeButton />
          <div className="relative z-10">{children}</div>
        </DepthProvider>
      </body>
    </html>
  );
}
