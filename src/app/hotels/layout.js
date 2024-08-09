import Head from 'next/head';

export const metadata = {
  title: "Top Luxury Hotels Collection | The Luxury Hotel Concierge",
  description: "Discover the world’s finest hotels. Enjoy unparalleled luxury, comfort, and service with The Luxury Hotel Concierge’s curated hotel selection.",
 
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/hotels" />
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
