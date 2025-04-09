import "./globals.css";
import "leaflet/dist/leaflet.css"; // Импортируем стили leaflet

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
