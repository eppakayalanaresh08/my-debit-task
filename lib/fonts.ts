

import { Playfair_Display, Lora } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold weights
  display: 'swap', // Optional: ensures text remains visible during font load
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});