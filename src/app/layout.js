import "./globals.css";

export const metadata = {
  title: "- The Luxury Hotel Concierge / Personal Luxury Services",
  description: "Experience Personalised luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement, services and efforts VISA request",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-f_3">
        {children}
      </body>
    </html>
  );
}
