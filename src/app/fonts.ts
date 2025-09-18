import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-discord", // CSS variable we’ll use in globals
  weight: ["400", "500", "600", "700"],
});
