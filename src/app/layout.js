import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CitraNegaraTeater",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>

        <Navbar></Navbar>
        </header>
        <main>
        {children}
        </main>
          </body>
    </html>
  );
}
