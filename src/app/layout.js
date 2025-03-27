import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Plan Hídrico Metropolitano",
  description: "Proyecto integral del plan hídrico en Hidalgo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
