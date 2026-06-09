import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trivon.vip"),
  title: "TRIVON — Smart living for Egypt & MENA",
  description:
    "TRIVON is building the smart-living layer the modern city runs on across Egypt and the wider MENA region — bringing delivery robotics, AI and smart-home technology to the region's new cities. A Tekniikkatie venture.",
  openGraph: {
    title: "TRIVON — Smart living for Egypt & MENA",
    description:
      "Building the smart-living layer the modern city runs on — robotics, AI and smart homes across Egypt and the wider MENA region.",
    type: "website",
    url: "https://www.trivon.vip",
    siteName: "TRIVON",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIVON — Smart living for Egypt & MENA",
    description:
      "Building the smart-living layer the modern city runs on — robotics, AI and smart homes across Egypt and the wider MENA region.",
  },
};

// Sets the theme before first paint so there is no flash. Default: light.
const noFlash = `(function(){try{var t=localStorage.getItem('trivon-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
