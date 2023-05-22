import localFont from "next/font/local";

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
