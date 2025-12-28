import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-cfl-black">{children}</main>
      </body>
    </html>
  );
}
    