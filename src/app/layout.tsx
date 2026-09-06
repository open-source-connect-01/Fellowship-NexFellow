import type { Metadata, Viewport } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://fellowship.nexfellow.com";
const siteDescription =
  "NexFellow Fellowship is a builder focused program where ambitious creators learn from industry leaders, build real software products, get expert feedback, and ship projects that solve real problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NexFellow Fellowship",
  description: siteDescription,
  openGraph: {
    title: "NexFellow Fellowship",
    description: siteDescription,
    url: siteUrl,
    siteName: "NexFellow Fellowship",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "NexFellow Fellowship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFellow Fellowship",
    description: siteDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NexFellow Fellowship",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
