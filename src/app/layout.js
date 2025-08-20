import Footer from "@/components/shared/Footer";
import ClientLayout from "@/components/shared/ClientLayout";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import "@/styles/globals.css";

export const metadata = {
  title: "Plan Hídrico del Valle del Mezquital | Gobierno de Hidalgo",
  description:
    "Descubre la estrategia integral para la gestión sustentable del agua y mejorar la productividad del campo en el Valle del Mezquital",
  keywords: [
    "Plan Hídrico Hidalgo",
    "Agua en Hidalgo",
    "Gestión hídrica",
    "Planeación ambiental",
    "Gobierno del Estado de Hidalgo",
    "Valle del Mezquital",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [
    {
      name: "Unidad de Planeación y Prospectiva - Coordinación General de Planeación y Proyectos - Gabriel Gómez Gómez",
      // url: "https://planestataldedesarrollo.hidalgo.gob.mx", // personalizar
    },
  ],
  creator: "Unidad de Planeación y Prospectiva",
  publisher: "Gobierno del Estado de Hidalgo",
  metadataBase: new URL("https://planhidrico.hidalgo.gob.mx"),

  // Open Graph (para compartir en redes como Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Plan Hídrico del Valle del Mezquital | Gobierno de Hidalgo",
    description:
      "Descubre la estrategia integral para la gestión sustentable del agua y mejorar la productividad del campo en el Valle del Mezquital",
    url: "https://planhidrico.hidalgo.gob.mx",
    siteName: "Plan Hídrico del Valle del Mezquital",
    images: [
      {
        url: "/og-image-hidrico.png",
        width: 1200,
        height: 630,
        alt: "Imagen representativa del Plan Hídrico del Valle del Mezquital",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
