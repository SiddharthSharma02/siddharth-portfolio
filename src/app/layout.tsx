import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif, League_Gothic, Rozha_One } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Rozha_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const italic = Instrument_Serif({
  variable: "--font-italic",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

const condensed = League_Gothic({
  variable: "--font-condensed",
  subsets: ["latin"],
  display: "block",
});

const text = Hanken_Grotesk({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/siddharth-festive.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF4E3" },
    { media: "(prefers-color-scheme: dark)", color: "#2B1A12" },
  ],
};

// Runs before first paint: picks the theme, and skips the splash for reduced-motion visitors.
const boot = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t;if(matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="skip"}d.classList.add("js")}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${italic.variable} ${condensed.variable} ${text.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
