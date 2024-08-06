import Head from 'next/head';

export const metadata = {
  title: "Luxury Travel Insights | The Luxury Hotel Concierge Blog",
  description: " Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement, Services and effortless VISA requests.",
 
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/blog" />
      </Head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </>
  )
}

export default layout
