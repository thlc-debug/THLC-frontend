import Head from 'next/head';

export const metadata = {
  title: "Elite Luxury Hotel Chains | The Luxury Hotel Concierge ",
  description: ": Discover top luxury hotel chains with The Luxury Hotel Concierge. Experience refined elegance and world-class service across elite brands.",
 
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/luxury-chains" />
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
