import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import './globals.css';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "D&R Advocacia - Assessoria Jurídica Especializada",
  description: "Escritório de advocacia especializado em diversas áreas do Direito. Atendimento personalizado e soluções jurídicas eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
