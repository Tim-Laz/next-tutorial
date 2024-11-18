import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local";

//Google fonts
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

//Local fonts
export const metropolis = localFont({
  src: [
    {
      path: "../../public/fonts/Metropolis-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-Metropolis",
});
