import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressContentEditableWarning>
      <body className={inter.className}>
        <Provider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
