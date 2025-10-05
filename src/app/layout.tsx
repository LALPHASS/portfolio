import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Diarra Hamadoun | Ingénieur IA & Développeur",
  description: "Portfolio professionnel de Diarra Hamadoun, ingénieur en intelligence artificielle et créateur de solutions innovantes. Expertise en IA, développement web et design.",
  keywords: ["IA", "Intelligence Artificielle", "Développement Web", "Machine Learning", "Next.js", "React", "Diarra Hamadoun"],
  authors: [{ name: "Diarra Hamadoun" }],
  creator: "Diarra Hamadoun",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hamadoun-diarra-portfolio.com",
    title: "Portfolio - Diarra Hamadoun | Ingénieur IA & Développeur",
    description: "Portfolio professionnel de Diarra Hamadoun, ingénieur en intelligence artificielle et créateur de solutions innovantes.",
    siteName: "Portfolio Diarra Hamadoun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Diarra Hamadoun | Ingénieur IA & Développeur",
    description: "Portfolio professionnel de Diarra Hamadoun, ingénieur en intelligence artificielle et créateur de solutions innovantes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
