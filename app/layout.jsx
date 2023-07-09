import { Metropolis, poppins } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Hotel Accommodations",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${Metropolis.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
