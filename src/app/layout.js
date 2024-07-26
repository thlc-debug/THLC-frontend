import "./globals.css";

export const metadata = {
  title: "The Luxury Hotel Concierge| Personalized Luxury Services",
  description: "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement, Services and effortless VISA requests.",
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
