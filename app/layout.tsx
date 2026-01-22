import type { Metadata } from "next";
import ThemeRegistry from "@/lib/theme-registry";
import GlobalHeader from "@/components/global-header";
import LenisWrapper from "@/components/lenis-wrapper";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { Box } from "@mui/material";

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
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <LanguageProvider>
            <LenisWrapper>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <GlobalHeader />
                <Box component="main" sx={{ flex: 1 }}>
                  {children}
                </Box>
              </Box>
            </LenisWrapper>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
