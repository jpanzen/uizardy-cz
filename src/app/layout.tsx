import Navbar from "@/components/navbar";
import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <html lang="cs">
        <body>
          <Navbar/>
          { children }
          <footer>ahoj</footer>
        </body>
      </html>
    )
  }