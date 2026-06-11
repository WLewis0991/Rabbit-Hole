import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { NeonAuthUIProviderWrapper } from "@/providers/neon-auth-ui-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rabbitHole",
  description: "Reddit clone with NeonDB, NextJS, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground ">
        <ThemeProvider>
          <NeonAuthUIProviderWrapper>{children}</NeonAuthUIProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
