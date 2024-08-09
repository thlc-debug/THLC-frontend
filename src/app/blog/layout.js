import Head from 'next/head';

export const metadata = {
  title: "Luxury Travel Insights | The Luxury Hotel Concierge Blog",
  description: "Stay updated with luxury travel tips, hotel reviews, and expert insights on The Luxury Hotel Concierge blog. Explore for inspiration.",
 
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
