import type { Metadata } from "next";
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
        width: 2550,
        height: 1339,
        alt: "NexFellow Fellowship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFellow Fellowship",
    description: siteDescription,
    images: ["/og.png"],
  },
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
