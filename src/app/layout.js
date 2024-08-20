import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "The Luxury Hotel Concierge | Personalized Luxury Services",
  description:
    "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement, Services and effortless VISA requests.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KTWVZ8J9KX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KTWVZ8J9KX');
          `}
        </Script>

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Luxury Hotel Concierge",
              url: "https://theluxuryhotelconcierge.com/",
              logo: "https://www.example.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9888334677",
                contactType: "Customer service",
              },
            }),
          }}
        />

        <link rel="canonical" href="https://theluxuryhotelconcierge.com/" />
      </head>
      <body className="font-f_3">{children}</body>
    </html>
  );
}
