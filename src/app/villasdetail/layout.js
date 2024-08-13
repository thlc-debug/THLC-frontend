import Head from "next/head";

export const metadata = {
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/villasdetail",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/villasdetail"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
