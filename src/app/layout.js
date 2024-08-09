import "./globals.css";
import Head from "next/head";
import Script from "next/script"

export const metadata = {
  title: "The Luxury Hotel Concierge | Personalized Luxury Services",
  description: "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement, Services and effortless VISA requests.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X0KQ7SFZ67"></Script>
        <Script id="google-tag-manager">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X0KQ7SFZ67');
        `}
        </Script>
      </Head>
      <body className="font-f_3">
        {children}
      </body>
    </html>
  );
}
