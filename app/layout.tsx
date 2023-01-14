import { Baloo_2 } from "@next/font/google";

import "./globals.css";

const baloo2 = Baloo_2({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={baloo2.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
