import Navbar from "@/components/navbar";
import './globals.css'
import { poppins } from "./ui/fonts";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <html lang="cs">
        <body className={`${poppins.className} antialiased bg-dark text-white`}>
          <Navbar/>
          { children }
          <footer>ahoj</footer>
        </body>
      </html>
    )
  }