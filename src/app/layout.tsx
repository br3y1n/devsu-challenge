import { openSans } from "@fonts";
import "./globals.css";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Devsu challenge",
  description: "Frontend-React challenge for devsu by Brayayin",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
    </head>
    <body className={openSans.className}>{children}</body>
  </html>
);

export { metadata, RootLayout as default };
