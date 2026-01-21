import type { Metadata } from "next";
import ThemeRegistry from "@/lib/theme-registry";

export const metadata: Metadata = {
  title: "SuccessHub",
  description: "Knowledge Base for Customers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
