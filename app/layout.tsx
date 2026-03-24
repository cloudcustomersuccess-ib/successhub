import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/lib/theme-registry";
import GlobalHeader from "@/components/global-header";
import LenisWrapper from "@/components/lenis-wrapper";
import { LanguageProvider } from "@/lib/i18n/language-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Customer Success Hub | TD SYNNEX",
  description: "Hub de recursos y conocimiento para Cloud Customer Success",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" async></script>
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`} style={{ margin: 0 }}>
        <ThemeRegistry>
          <LanguageProvider>
            <LenisWrapper>
              <div className="flex flex-col min-h-screen">
                <GlobalHeader />
                <main className="flex-1">
                  {children}
                </main>
              </div>
            </LenisWrapper>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
