import Head from 'next/head';

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/explore" />
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
