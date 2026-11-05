import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica FAAZ | Endocrinologia & Cirurgia Plástica em Belo Horizonte",
  description:
    "Centro médico de excelência em Endocrinologia e Cirurgia Plástica em Belo Horizonte. Tecnologia exclusiva EnDoc 2.0 para acompanhamento contínuo dos pacientes de endocrinologia.",
  keywords: [
    "Clínica FAAZ",
    "Endocrinologia Belo Horizonte",
    "Cirurgia Plástica Belo Horizonte",
    "Endocrinologista BH",
    "Cirurgião Plástico BH",
    "Contorno Corporal",
    "EnDoc 2.0",
  ],
  authors: [{ name: "Clínica FAAZ" }],
  icons: {
    icon: "/logo-faaz.png",
    shortcut: "/logo-faaz.png",
    apple: "/logo-faaz.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-emerald-600 selection:text-white scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fafbfc] text-slate-800 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
