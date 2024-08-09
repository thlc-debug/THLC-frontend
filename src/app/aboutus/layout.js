import Head from 'next/head';

export const metadata = {
  title: "About Us | The Luxury Hotel Concierge: Your Gateway to Luxury",
  description: "Learn about The Luxury Hotel Concierge—our story, values, and commitment to delivering exceptional, personalized luxury travel experiences.",
 
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/aboutus" />
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
