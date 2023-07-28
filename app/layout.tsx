import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import Navigator from "~/components/navigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACOM Corp",
  description: "Demo Ecommerce Site by Avi Avinav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "@light:bg-white @light:text-black @dark:bg-dark @dark:text-white"
        )}
      >
        <Navigator />
        {children}
      </body>
    </html>
  );
}
