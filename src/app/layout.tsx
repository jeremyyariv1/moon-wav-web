import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "moonwav — Short-Form Audio, Personalized to Your Day",
  description:
    "A bite-sized, algorithmically curated audio feed — 20-second clips to 5-minute deep dives — that adapts to your interests, your schedule, and the time of day. TikTok meets podcasts.",
  metadataBase: new URL("https://moonwav.ai"),
  openGraph: {
    title: "moonwav — Short-Form Audio, Personalized to Your Day",
    description:
      "TikTok meets podcasts. Press play and discover a continuous stream of audio curated to your life.",
    url: "https://moonwav.ai",
    siteName: "moonwav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "moonwav",
    description: "Short-Form Audio, Personalized to Your Day",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
