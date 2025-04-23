import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* ✅ AdSense account meta */}
        <meta name="google-adsense-account" content="ca-pub-5699412612098290" />
        
        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="BjQi6M44-kOEJWK4NSZujRa1e5B8xBYm7KrFY2wj_mU" />
        
        {/* ✅ Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>

      <body>
        {/* ✅ AdSense Script */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5699412612098290"
          crossOrigin="anonymous"
        />

        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V78YVZ0GXM"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V78YVZ0GXM');
            `,
          }}
        />

        {/* ✅ Bootstrap JS */}
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />

        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
