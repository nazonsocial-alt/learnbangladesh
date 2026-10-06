import { Hind_Siliguri, Noto_Serif_Bengali, Inter } from "next/font/google";

export const hind = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-bn" });
export const notoSerifBn = Noto_Serif_Bengali({ subsets: ["bengali"], weight: ["600", "700"], display: "swap", variable: "--font-display-bn" });
export const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-latin" });
