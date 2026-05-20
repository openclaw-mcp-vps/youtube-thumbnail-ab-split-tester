import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailTest – A/B Test YouTube Thumbnails",
  description: "Automatically rotate thumbnail variants and track CTR to find winning designs. Built for YouTube creators with 10K+ subscribers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d80b0900-7157-42a7-ae4b-f474ce745ce4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
