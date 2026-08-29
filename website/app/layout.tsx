import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coloriage — Pronostics sportifs",
  description: "Analyses, statistiques et pronostics sportifs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
