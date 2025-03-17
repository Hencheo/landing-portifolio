import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/componentes/layout/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portfólio | Hencheo - Desenvolvedor Full Stack",
  description: "Portfólio profissional de Hencheo, desenvolvedor Full Stack especializado em Python, Django, React Native e Next.js. Conheça meus projetos e habilidades em desenvolvimento web, mobile e análise de dados.",
  keywords: ["desenvolvedor full stack", "python", "django", "react native", "next.js", "desenvolvimento web", "desenvolvimento mobile", "análise de dados", "portfólio", "hencheo", "programador"],
  authors: [
    { name: "Hencheo", url: "https://github.com/hencheo" }
  ],
  creator: "Hencheo",
  publisher: "Hencheo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hencheo.github.io/landing-portifolio/",
    title: "Portfólio | Hencheo - Desenvolvedor Full Stack",
    description: "Portfólio profissional de Hencheo, desenvolvedor Full Stack especializado em Python, Django, React Native e Next.js",
    siteName: "Portfólio de Hencheo",
    images: [
      {
        url: "/imagens/perfil/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Hencheo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Hencheo - Desenvolvedor Full Stack",
    description: "Portfólio profissional de Hencheo, desenvolvedor Full Stack especializado em Python, Django, React Native e Next.js",
    images: ["/imagens/perfil/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#060606",
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
