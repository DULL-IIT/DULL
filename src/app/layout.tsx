import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "DULL",
  description: "DULL Research Group Website",
  openGraph: {
    type: "website",
    locale: "en_US",
   
    siteName: "DULL",
    title: "Dhaka University Life & Language Research Group",
    description:
      "Currently having almost 10 members. This group holds some notable contributions in Bioinformatics & Natural Language Processing related in Bangladesh.",
    
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
