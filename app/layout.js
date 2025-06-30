//import CookieConsentComponent from "@/components/CookieConsent/CookieConsent"
import Footer from "@/components/Footer/Footer"
import ScrollButton from "@/components/ScrollButton/ScrollButton"
import "@/styles/globals.css"
import Script from "next/script"
//import "vanilla-cookieconsent/dist/cookieconsent.css"

export const metadata = {
  //metadataBase: new URL("https://www.nautilusshipping.com"),
  robots: "index, follow",
  // title:
  //   "Ship Management Company, Vessel Management Services | Nautilus Shipping",
  // description: "Delivering excellence in technical and crew management",
  // verification: {
  //   google: "googled87b13e1b76e2421", // ✅ This is the cleanest way
  // },
  // alternates: {
  //   canonical: "https://www.nautilusshipping.com", // Add the canonical URL here
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Other head elements */}
        <meta
          name="google-site-verification"
          content="ximcwDn5nLvnNzaFd5RFKg4kZIsdRpd2fZ5waaTkXZw"
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MC9BP82');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-N3V27DPYSK"
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-N3V27DPYSK');
          `}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC9BP82"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>

        <ScrollButton />
        {/* <CookieConsentComponent /> */}
      </body>
    </html>
  )
}
