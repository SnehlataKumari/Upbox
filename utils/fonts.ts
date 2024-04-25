import { DM_Serif_Text, DM_Sans } from "next/font/google";
import { Roboto } from 'next/font/google'

export const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: '400' });
export const dmSansText = DM_Sans({ subsets: ["latin"], weight: '400' });
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

