import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { FaviconUpdater } from "@/components/favicon-updater";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Félix Pérez | Desarrollador Frontend",
  description:
    "Especializado en React y Next.js, construyo E-commerce de alto rendimiento que combinan velocidad, usabilidad y experiencia visual."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/faviconlight.ico" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FaviconUpdater />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
