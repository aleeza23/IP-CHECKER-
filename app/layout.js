import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

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

export const metadata = {
  title: "IP Detailer - IP Address Checker Tool",
  description:
    "thestockit.net/tools/ipdetailer provides an IP address checker tool that gives you detailed IP information, including location, ISP, browser details, screen resolution, and cookies status instantly and for free.",
  keywords:
    "IP address checker, IP tool, IP details, IP lookup, location checker, ISP details, screen resolution checker, cookies status checker, free IP checker, online privacy, IP tracking tool",
  author: "The Stockit",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <link
          rel="canonical"
          href="https://www.thestockit.net/tools/ip-detailer/"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="py-10 bg-gray-100">
          <Header />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
