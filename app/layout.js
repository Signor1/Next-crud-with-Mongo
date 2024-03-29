import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-3xl m-auto overflow-x-hidden min-h-screen bg-gray-950 text-gray-200`}
      >
        <NavBar />
        <div className="mt-12">{children}</div>
      </body>
    </html>
  );
}
