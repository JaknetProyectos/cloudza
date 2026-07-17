import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./[locale]/ClientBody";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Klyhost",
  description:
    "Make your site grow with powerfull high quality hosting",
  icons: {
    icon: "/icon.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
      </head>
      <body suppressHydrationWarning className="antialiased font-body">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}