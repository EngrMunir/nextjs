import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next Explore",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
            <div>
            {children}
            </div>
          <footer className="bg-blue-500">
            This is footer
          </footer>
        </body>
    </html>
  );
}
