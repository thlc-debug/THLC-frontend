import Card from "@/components/luxury-chains/Card";
import Hero from "@/components/luxury-chains/HeroSection";
import Search from "@/components/luxury-chains/Search";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chains from "@/components/luxury-chains/Chains";

const Page = () => {
  return (
    <main className="font-f_3">
      <Header />
      <Hero />
      <h1 className="sr-only">Luxury Chains</h1>
      <h2 className="sr-only">Find hotels as per your convenience...</h2>
      {/* <Search
        searchInput={searchInput}
        handleInput={handleInput}
        handleFilter={applyFilter}  
      /> */}
      <Chains />
      <Footer />
    </main>
  );
};

// const HotelsPageWithSuspense = () => (
//   <Suspense fallback={<Loader />}>
//     <Page />
//   </Suspense>
// );

export default Page;
