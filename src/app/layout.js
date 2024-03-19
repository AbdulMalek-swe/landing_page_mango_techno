import { Outfit } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cursor from "../cursor/Cursor";
import Navbar from "../components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "CDDA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="z-50 sticky container mx-auto px-4  top-0  mt-4">

          <Navbar />
        </div>
        <Cursor>

          {children}</Cursor>
      </body>
    </html>
  );
}
