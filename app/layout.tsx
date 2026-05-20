import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ander Eli | Junior Software Developer",
    template: "%s | Ander Eli",
  },
  description:
    "Portafolio profesional de Ander Eli: proyectos reales con Android, Flask, Java Swing, APIs REST, bases de datos y sistemas administrativos.",
  keywords: [
    "Ander Eli",
    "Junior Software Developer",
    "Android Developer",
    "Flask",
    "Java Swing",
    "APIs REST",
    "Guatemala",
  ],
  authors: [{ name: "Ander Eli" }],
  creator: "Ander Eli",
  openGraph: {
    title: "Ander Eli | Junior Software Developer",
    description:
      "Proyectos reales con Android, Flask, Java Swing, APIs REST y sistemas administrativos.",
    type: "website",
    locale: "es_GT",
  },
  twitter: {
    card: "summary",
    title: "Ander Eli | Junior Software Developer",
    description:
      "Portafolio profesional con proyectos reales de software, Android, backend y bases de datos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-GT" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
