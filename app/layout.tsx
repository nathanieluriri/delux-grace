import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/scaffold/Header";
import Footer from "@/scaffold/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affiliatemarketing.com.ng"),
  title: {
    template: "%s — Delux",
    default: "Delux",
  },
  description:
    "Delux is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join Delux to achieve financial freedom and embrace a life of abundance.",
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s — Delux",
      default: "Delux",
    },
    creator: "@Delux",
    description:
      "Delux is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join Delux to achieve financial freedom and embrace a life of abundance.",
    images: ["/promo-image.jpg"],
  },

  other: {
    "google-site-verification": "sqsJwdYR5ZIcNWbO7-ebNMCFDOzPgyn4NnaktgI7rWM",
  },
  keywords:
    "financial freedom, cryptocurrency mining, passive income, social media monetization, digital learning, advanced earning models, daily rewards, Delux platform, Delux, Deluxnet",
  openGraph: {
    title: {
      template: "%s — Delux",
      default: "Delux",
    },
    description:
      "Delux is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join Delux to achieve financial freedom and embrace a life of abundance.",
    images: [
      {
        url: "/promo-image.jpg",
        width: 1200,
        height: 630,
        alt: `Delux promo image`,
      },
    ],
  },
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_APP_BASE_URL || "https://localhost:3000"
  // ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
