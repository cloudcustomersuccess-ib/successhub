import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuccessHub",
  description: "Knowledge Base for Customers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
