import { Manrope } from "next/font/google";

import localFont from 'next/font/local'


export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-discord", // CSS variable we’ll use in globals
  weight: ["400", "500", "600", "700"],
});



export const w98Font = localFont({
  src: [
    { path: './fonts/PixelifySans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/PixelifySans-SemiBold.ttf', weight: '500', style: 'normal' },
    { path: './fonts/PixelifySans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-w98', // CSS variable
})