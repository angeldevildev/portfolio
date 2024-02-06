import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./Components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angelo Broggian",
  description: "The portfolio of Angelo Broggian coded in: React and CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-GLDSQV9TT9" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
