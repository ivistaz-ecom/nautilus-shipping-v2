import Footer from "@/components/Footer/Footer"
import ScrollButton from "@/components/ScrollButton/ScrollButton"
import "@/styles/globals.css"

export const metadata = {
  robots: "noindex, nofollow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <ScrollButton />
      </body>
    </html>
  )
}
