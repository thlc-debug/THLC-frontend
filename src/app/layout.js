import "./globals.css";
import Head from "next/head";
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
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KTWVZ8J9KX"
        ></Script>
        <Script id="google-tag-manager">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KTWVZ8J9KX');
          `}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X0KQ7SFZ67"
        ></Script>
        <Script id="google-tag-manager">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X0KQ7SFZ67');
        `}
        </Script>

        {/* TODO : Add logo */}

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
        ></Script>
      </Head>
      <body className="font-f_3">{children}</body>
    </html>
  );
}
