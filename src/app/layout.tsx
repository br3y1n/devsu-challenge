import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const metadata: Metadata = {
  title: "Devsu challenge",
  description: "Frontend-React challenge for devsu by Brayayin",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
    </head>
    <body className={roboto.className}>{children}</body>
  </html>
);

export { metadata, RootLayout as default };
