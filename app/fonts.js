import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "900"],
  variable: "--font-poppins",
});

export const Metropolis = localFont({
  src: [
    {
      path: "../fonts/Metropolis-Light.otf",
      weight: "200",
    },
    {
      path: "../fonts/Metropolis-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/Metropolis-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-metropolis",
});
