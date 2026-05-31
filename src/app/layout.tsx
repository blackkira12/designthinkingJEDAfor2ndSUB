import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JEDA Design Thinking Agent Studio",
  description: "Agentic Design Thinking Workspace for Pinjol, Paylater, Judi Online, and Debt-Stress Intervention in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
