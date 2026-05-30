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

export const metadata = {
  title: "TRIVON — The layer the modern city runs on",
  description:
    "TRIVON is building the autonomous layer the modern city runs on — starting with last-mile delivery across the smart communities of Egypt and the wider MENA region. A Tekniikkatie venture.",
  openGraph: {
    title: "TRIVON — The layer the modern city runs on",
    description:
      "Building the autonomous layer the modern city runs on, across Egypt and the wider MENA region.",
    type: "website",
  },
};

// Sets the theme before first paint so there is no flash. Default: light.
const noFlash = `(function(){try{var t=localStorage.getItem('trivon-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
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
